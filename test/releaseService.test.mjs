import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

const TARGET_ASSET_NAME = 'mkr-music-universal.apk';

function pickUniversalAsset(assets) {
  if (!Array.isArray(assets)) return null;
  return assets.find(
    (asset) => asset && typeof asset.name === 'string' && asset.name === TARGET_ASSET_NAME
  ) || null;
}

describe('Release Service Asset Matching', () => {
  test('Exact case-sensitive match selects mkr-music-universal.apk', () => {
    const assets = [
      { name: 'mkr-music-arm64.apk', browser_download_url: 'https://example.com/arm64.apk', size: 30000000 },
      { name: 'mkr-music-universal.apk', browser_download_url: 'https://example.com/universal.apk', size: 36335719 },
      { name: 'output-metadata.json', browser_download_url: 'https://example.com/meta.json', size: 1200 }
    ];

    const match = pickUniversalAsset(assets);
    assert.ok(match, 'Should find the universal APK');
    assert.equal(match.name, 'mkr-music-universal.apk');
    assert.equal(match.browser_download_url, 'https://example.com/universal.apk');
    assert.equal(match.size, 36335719);
  });

  test('Case sensitivity rejects mismatched casing', () => {
    const assets = [
      { name: 'MKR-MUSIC-UNIVERSAL.APK', browser_download_url: 'https://example.com/wrong.apk' },
      { name: 'Mkr-Music-Universal.apk', browser_download_url: 'https://example.com/wrong2.apk' }
    ];

    const match = pickUniversalAsset(assets);
    assert.equal(match, null, 'Must strictly reject mismatched casing');
  });

  test('Fuzzy or partial matches are strictly rejected', () => {
    const assets = [
      { name: 'mkr-music-universal-v6.0.8.apk', browser_download_url: 'https://example.com/v6.apk' },
      { name: 'universal.apk', browser_download_url: 'https://example.com/partial.apk' },
      { name: 'mkr-music-universal.apk.zip', browser_download_url: 'https://example.com/zip.apk' }
    ];

    const match = pickUniversalAsset(assets);
    assert.equal(match, null, 'Partial and suffix matches must be rejected');
  });

  test('Missing universal asset returns null safely without throwing', () => {
    const assets = [
      { name: 'source.tar.gz', browser_download_url: 'https://example.com/src.tar.gz' }
    ];

    const match = pickUniversalAsset(assets);
    assert.equal(match, null);
  });

  test('Empty or invalid assets array returns null', () => {
    assert.equal(pickUniversalAsset([]), null);
    assert.equal(pickUniversalAsset(null), null);
    assert.equal(pickUniversalAsset(undefined), null);
  });
});
