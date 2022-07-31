/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    /* Used for importing md/mdx files as strings */
    config.module.rules.push({
      test: /\.(md|mdx)$/,
      use: ["raw-loader"],
    });

    return config;
  },
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
