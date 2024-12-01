/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => 
  {
    config.plugins.push(
     new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery",
     "window.jQuery": "jquery",
  })
);
 return config;
  },
  images: {
    formats: ['image/webp'], // รองรับไฟล์ .webp
  },
  keyframes: {
    rotate3d: {
      '0%': { transform: 'rotate3d(0, 1, 0, 0deg)' },
      '25%': { transform: 'rotate3d(0, 1, 0, 90deg)' },
      '50%': { transform: 'rotate3d(0, 1, 0, 180deg)' },
      '75%': { transform: 'rotate3d(0, 1, 0, 270deg)' },
      '100%': { transform: 'rotate3d(0, 1, 0, 3600deg)' },
    }
  }
};



export default nextConfig;
