/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/m4w',
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;