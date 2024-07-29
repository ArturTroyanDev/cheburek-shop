/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';
import path from 'path';

const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Domain name
    unoptimized: true
  }

};



export default withPlaiceholder(nextConfig);
