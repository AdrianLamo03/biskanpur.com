import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '**',
      },
    ],
  },
  experimental: {
    // This tells the compiler to allow namespaces if they appear
    swcPlugins: [],
  },
  compiler: {
    // This is the direct fix for the error message you received
    reactRemoveProperties: false,
  },
  // If you are using SWC (default in Next.js), add this:
  transpilePackages: ['lucide-react'],
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
