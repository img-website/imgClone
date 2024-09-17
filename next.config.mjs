/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'tailwindui.com',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'youtu.be',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'www.imgglobalinfotech.com',
            port: '',
            pathname: '/**',
        },
    
    ],

  

},
};

export default nextConfig;
