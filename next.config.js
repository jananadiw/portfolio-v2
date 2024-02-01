/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
        domains: ['janawcontent.s3.ap-northeast-2.amazonaws.com', 'unsplash.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's3.amazonaws.com',
            port: '',
            pathname: '/jananadiw/**',
          },
        ],
      },
        reactStrictMode: true,
        swcMinify: true,

}

module.exports = nextConfig


