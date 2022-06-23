/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  future: {
    webpack5: false,
  },
  nextConfig,
  images: {
    domains: ["localhost"],
  },
};
