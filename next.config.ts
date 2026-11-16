import type { NextConfig } from 'next';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const nextConfig: NextConfig = {
  turbopack: { root },
  outputFileTracingRoot: root,
  poweredByHeader: false,
  // AVIF first (smaller), WebP fallback; the optimizer negotiates via the Accept header.
  images: { formats: ['image/avif', 'image/webp'] },
  // Consolidated pages (SEO audit, 16 Nov 2026): permanent: true sends 308.
  async redirects() {
    return [
      { source: '/calorie-macro-tracker', destination: '/free-calorie-and-macro-tracker', permanent: true },
      { source: '/guides/myfitnesspal-alternative-android', destination: '/compare/myfitnesspal-alternative', permanent: true },
      { source: '/guides/choose-workout-and-meal-planner-app', destination: '/guides/best-ai-workout-and-meal-planner-apps-android', permanent: true },
    ];
  },
  async headers() {
    return process.env.VERCEL_ENV === 'preview'
      ? [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }]
      : [];
  },
};

export default nextConfig;
