import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.lacostena.com.mx",
        pathname: "/media/uploads/Logos/**",
      },
      {
        protocol: "https",
        hostname:"i5.walmartimages.com.mx"
      }
    ],
  },
};

export default nextConfig;