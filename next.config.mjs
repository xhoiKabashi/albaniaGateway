/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["https://albaniagateway.com"], // Replace with your domains
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
};

export default nextConfig;
