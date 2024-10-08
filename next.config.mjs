/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scontent.fkul18-2.fna.fbcdn.net',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'scontent.fkul18-1.fna.fbcdn.net',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'scontent.fkul18-3.fna.fbcdn.net',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;
