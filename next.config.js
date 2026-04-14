/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  
  // ADD THIS BLOCK TO FIX THE IMAGE WARNING
  images: {
    unoptimized: true,
  },
};

export default nextConfig;