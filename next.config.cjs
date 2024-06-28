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

  image: {
    domains: ["github.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};

export default withMDX(nextConfig);
