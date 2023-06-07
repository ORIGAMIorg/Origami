/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/co-ho",
        permanent: true,
      },
    ];
  },
};
