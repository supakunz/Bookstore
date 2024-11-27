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
  }
};



export default nextConfig;
