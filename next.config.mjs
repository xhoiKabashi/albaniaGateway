/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Explicitly specify protocol for clarity
        hostname: "albaniagateway.com",
      },
      // Add more objects for other allowed domains if needed
    ],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
};

export default nextConfig;
