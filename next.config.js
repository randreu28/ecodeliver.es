/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "cookie",
            key: "isBusiness",
            value: "true",
          },
        ],
        permanent: false,
        destination: "/empresa",
      },
      {
        source: "/",
        has: [
          {
            type: "cookie",
            key: "isBusiness",
            value: "false",
          },
        ],
        permanent: false,
        destination: "/particular",
      },
      {
        source: "/",
        permanent: false,
        destination: "/particular",
      },
    ];
  },
};

module.exports = nextConfig;
