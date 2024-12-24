module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
        pathname: '/**',
      },
    ],
  },
  reactStrikeMode: false,
  eslint:{
    ignoreDuringBuilds: true,
  },
};