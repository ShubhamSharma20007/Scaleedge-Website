/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "ordainit.com"
            },

        ]
    },
    eslint: {
        ignoreDuringBuilds: true
    }, 
}

module.exports = nextConfig