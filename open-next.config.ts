// open-next.config.ts — @opennextjs/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  // Serve prerendered/SSG pages (e.g. /journal/[slug]) from Workers static
  // assets. Without an incremental cache, SSG dynamic routes 404 at runtime.
  incrementalCache: staticAssetsIncrementalCache,
});
