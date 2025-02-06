import { RouteType } from './node_modules/.pnpm/next@15.1.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next_tmp_12264/dist/lib/load-custom-routes.d'
import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: { typedRoutes: true },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
  },
})

export default withMDX(nextConfig)
