/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure public assets are copied
  trailingSlash: true,
}

export default nextConfig