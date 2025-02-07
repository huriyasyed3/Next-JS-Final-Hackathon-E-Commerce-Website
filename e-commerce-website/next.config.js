// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['cdn.sanity.io'], // Add your allowed domains here
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

module.exports = nextConfig;
