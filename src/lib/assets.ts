/**
 * Reliable asset path resolution across GitHub Pages subpaths, Vercel, Netlify, and Local Preview
 */
export function getAssetUrl(path: string): string {
  const clean = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || './';
  if (base.endsWith('/')) {
    return `${base}${clean}`;
  }
  return `${base}/${clean}`;
}

export const APP_LOGO = getAssetUrl('favicon.jpg');
