/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pinimg.com", "www.squareboxfitness.com"],
  },
  env: {
    NEXTAUTH_URL: "http://localhost:3000/",
  },
};

module.exports = nextConfig;
