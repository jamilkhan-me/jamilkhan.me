import nextMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    appdir: true,
    mdxRs: true,
  },
  image: {
    domains: ["github.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withMDX(nextConfig);
