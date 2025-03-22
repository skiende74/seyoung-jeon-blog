import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import { remarkRawMdx } from './src/remark-raw-mdx'
import type { Options } from 'rehype-prism-plus/generator'

const nextConfig: NextConfig = {
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
      [
        rehypePrismPlus,
        { showLineNumbers: true, defaultLanguage: 'text' } satisfies Options,
      ],
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
