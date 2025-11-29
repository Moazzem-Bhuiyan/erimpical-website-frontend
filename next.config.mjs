/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'grandesports.nyc3.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/', // redirect user from `/` to `/home` by default
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
