import { useState, useEffect } from 'react';
import { ReleaseInfo } from '../types';

const API_URL = 'https://api.github.com/repos/mkr-infinity/mkr-music/releases/latest';
const TARGET_ASSET_NAME = 'mkr-music-universal.apk';
const RELEASES_PAGE_URL = 'https://github.com/mkr-infinity/mkr-music/releases/latest';
const CACHE_KEY = 'mkr_music_latest_release';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// In-memory cache fallback
let memoryCache: { data: ReleaseInfo; timestamp: number } | null = null;
let activeFetchPromise: Promise<ReleaseInfo> | null = null;

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(2)} MB`;
}

async function fetchLatestRelease(): Promise<ReleaseInfo> {
  const now = Date.now();

  // 1. Check in-memory cache
  if (memoryCache && now - memoryCache.timestamp < CACHE_TTL_MS) {
    return memoryCache.data;
  }

  // 2. Check sessionStorage
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (now - parsed.timestamp < CACHE_TTL_MS) {
        memoryCache = parsed;
        return parsed.data;
      }
    }
  } catch {
    // SessionStorage may be unavailable
  }

  // 3. Deduplicate in-flight fetches
  if (activeFetchPromise) {
    return activeFetchPromise;
  }

  activeFetchPromise = (async () => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status}`);
      }

      const data = await res.json();
      const assets = Array.isArray(data.assets) ? data.assets : [];

      // Exact case-sensitive match for mkr-music-universal.apk
      const universalAsset = assets.find(
        (asset: { name?: string }) => asset && asset.name === TARGET_ASSET_NAME
      );

      if (!universalAsset || !universalAsset.browser_download_url) {
        const unavailableResult: ReleaseInfo = {
          status: 'unavailable',
          version: 'Universal Latest',
          downloadUrl: RELEASES_PAGE_URL,
          fileSize: '',
          publishedAt: data.published_at || '',
          releaseNotesUrl: data.html_url || RELEASES_PAGE_URL,
          releasesPageUrl: RELEASES_PAGE_URL,
          error: 'Universal APK asset temporarily unavailable in latest release.',
        };
        return unavailableResult;
      }

      const successResult: ReleaseInfo = {
        status: 'success',
        version: data.tag_name || 'Universal Latest',
        downloadUrl: universalAsset.browser_download_url,
        fileSize: universalAsset.size ? formatBytes(universalAsset.size) : '',
        publishedAt: data.published_at || '',
        releaseNotesUrl: data.html_url || RELEASES_PAGE_URL,
        releasesPageUrl: RELEASES_PAGE_URL,
      };

      // Cache successful response
      memoryCache = { data: successResult, timestamp: Date.now() };
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(memoryCache));
      } catch {
        // Ignore storage quotas
      }

      return successResult;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch release';
      const errorResult: ReleaseInfo = {
        status: 'error',
        version: 'Universal Latest',
        downloadUrl: RELEASES_PAGE_URL,
        fileSize: '',
        publishedAt: '',
        releaseNotesUrl: RELEASES_PAGE_URL,
        releasesPageUrl: RELEASES_PAGE_URL,
        error: message,
      };
      return errorResult;
    } finally {
      activeFetchPromise = null;
    }
  })();

  return activeFetchPromise;
}

export function useLatestRelease(): ReleaseInfo {
  const [release, setRelease] = useState<ReleaseInfo>(() => {
    if (memoryCache && Date.now() - memoryCache.timestamp < CACHE_TTL_MS) {
      return memoryCache.data;
    }
    return {
      status: 'loading',
      version: 'Universal Latest',
      downloadUrl: RELEASES_PAGE_URL,
      fileSize: '',
      publishedAt: '',
      releaseNotesUrl: RELEASES_PAGE_URL,
      releasesPageUrl: RELEASES_PAGE_URL,
    };
  });

  useEffect(() => {
    let isMounted = true;

    fetchLatestRelease().then((result) => {
      if (isMounted) {
        setRelease(result);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return release;
}
