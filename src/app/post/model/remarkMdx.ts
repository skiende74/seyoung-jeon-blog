import rehypePrismPlus from 'rehype-prism-plus'
import { readFile } from 'node:fs/promises'

import { compile } from '@mdx-js/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeCodeTitles from 'rehype-code-titles'

export async function makeMDX(filename: string) {
  const { value } = await compile(await readFile(filename), {
    jsx: true,
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [
      rehypeCodeTitles,
      [rehypePrismPlus, { showLineNumbers: true }],
    ],
  })

  return value
}
