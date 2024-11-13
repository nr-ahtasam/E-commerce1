/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "same-origin allow-popups",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
