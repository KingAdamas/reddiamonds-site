/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/rush',
        destination: '/bbr-portal/',
        permanent: true,
      },
    ]
  },
};
module.exports = nextConfig;
