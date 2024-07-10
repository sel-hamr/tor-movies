/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "yts.mx",
        port: "",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
