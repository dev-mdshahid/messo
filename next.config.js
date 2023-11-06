/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pinimg.com", "res.cloudinary.com", "www.squareboxfitness.com"],
  },
  env: {
    NEXT_PUBLIC_NEXTAUTH_URL: "http://192.168.0.106:3000/",
    NEXT_PUBLIC_CLOUD_NAME: "dfo9gj4ce",
  },
};

module.exports = nextConfig;
