/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'randomuser.me',
            pathname: '/**',
          },
        ],
      },
      reactStrictMode: true,
      transpilePackages: ["ui", "api"],
}
export default nextConfig;
