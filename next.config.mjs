/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.lummi.ai',
            port: '',
            pathname: '/assets/**',
          },
        ],
      },
    
};

export default nextConfig;
