import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
// import rehypeHighlight, { Options } from 'rehype-highlight'
// import rehypeHighlightCodeLines, {
//   HighlightLinesOptions,
// } from 'rehype-highlight-code-lines'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import { remarkRawMdx } from './src/remark-raw-mdx'
const nextConfig: NextConfig = {
  /* config options here */
  experimental: { typedRoutes: true },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'velog.velcdn.com' }],
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkRawMdx,
    ],
    rehypePlugins: [
      // rehypeHighlight,
      rehypeCodeTitles,
      [rehypePrismPlus, { showLineNumbers: true }],
      // [rehypeHighlight, {} satisfies Options],
      // [
      //   rehypeHighlightCodeLines,
      //   {
      //     // showLineNumbers: true,
      //   } satisfies HighlightLinesOptions,
      // ],
    ],
  },
})

export default withMDX(nextConfig)
