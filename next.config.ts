import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pokemon-card.com',
        pathname: '/assets/images/card_images/large/**',
      },
    ],
    minimumCacheTTL: 30, // Cache images for 60 seconds
  },
};

export default nextConfig;