import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    // includePaths: [path.join(__dirname, 'app')],
    includePaths: ['./app/'],
  },
};

export default nextConfig;
