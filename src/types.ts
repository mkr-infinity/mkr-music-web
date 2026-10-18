export interface ReleaseInfo {
  status: 'loading' | 'success' | 'error' | 'unavailable';
  version: string;
  downloadUrl: string;
  fileSize: string;
  publishedAt: string;
  releaseNotesUrl: string;
  releasesPageUrl: string;
  error?: string;
}

export interface ScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  filename: string;
  aspect: string;
}

export interface FeatureStory {
  id: string;
  tag: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  reversed?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
