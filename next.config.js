/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pinimg.com", "res.cloudinary.com", "www.squareboxfitness.com"],
  },
  env: {
    NEXT_PUBLIC_NEXTAUTH_URL: "https://messo.vercel.app/",
    NEXT_PUBLIC_CLOUD_NAME: "dfo9gj4ce",
  },
};

module.exports = nextConfig;
