/** @type {import('next').NextConfig} */
const nextConfig = {
  // We removed "output: 'export'" so App Hosting can build correctly
  trailingSlash: true, 
  images: { unoptimized: true },
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

