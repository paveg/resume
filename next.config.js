/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtentions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
};

module.exports = withMDX(nextConfig);
