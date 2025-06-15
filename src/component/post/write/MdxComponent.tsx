'use client'
import React, { useState, useEffect, ReactElement } from 'react'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { remarkRawMdx } from '@/remark-raw-mdx'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import { Options } from 'rehype-prism-plus/generator'

export default function MdxComponent({ mdxText }: { mdxText: string }) {
  const [CompiledMDX, setCompiledMDX] = useState<(() => ReactElement) | null>(
    null
  )

  useEffect(() => {
    async function parseMdx() {
      try {
        // evaluate()로 mdx 문자열을 리액트 컴포넌트로 변환
        // runtime: 'react/jsx-runtime'에서 가져온 객체들을 넘겨줘야함
        const { default: MdxComponent } = await evaluate(mdxText, {
          ...runtime,
          remarkPlugins: [
            remarkGfm,
            remarkFrontmatter,
            remarkMdxFrontmatter,
            remarkRawMdx,
          ],
          rehypePlugins: [
            rehypeCodeTitles,
            [
              rehypePrismPlus,
              {
                showLineNumbers: true,
                defaultLanguage: 'text',
              } satisfies Options,
            ],
          ],
        })
        // evaluate()가 반환하는 MdxComponent는 "MDX로부터 변환된 React 컴포넌트"
        setCompiledMDX(() => MdxComponent as () => ReactElement)
      } catch (err) {
        console.error('MDX 파싱 오류:', err)
        setCompiledMDX(null)
      }
    }
    parseMdx()
  }, [mdxText]) // mdxText 바뀔 때마다 새로 파싱

  return (
    <div style={{ padding: '1rem' }}>
      {CompiledMDX ? <CompiledMDX /> : <div>MDX를 파싱 중...</div>}
    </div>
  )
}
