/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: {
            allowFutureImage: true,
        }
    },

    images: {
        domains: [
            'files.stripe.com',
        ]
    },
};

export default nextConfig;
