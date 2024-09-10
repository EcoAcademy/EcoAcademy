/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      // Ignore TypeScript errors during the production build
      ignoreBuildErrors: true,
    },
    eslint: {
      // Ignore ESLint errors during the production build
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  