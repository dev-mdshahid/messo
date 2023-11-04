/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pinimg.com", "www.squareboxfitness.com"],
  },
  env: {
    NEXTAUTH_URL: "https://messo.vercel.app/",
  },
};

module.exports = nextConfig;
