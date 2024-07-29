/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // <== Domain name
  }

};

import path from 'path';


export default withPlaiceholder(nextConfig);
