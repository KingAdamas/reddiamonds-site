/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // This creates folders for each route (e.g., /bbr-portal/index.html)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
