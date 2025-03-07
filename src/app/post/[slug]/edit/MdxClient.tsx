'use client'
import React, { useState, useEffect } from 'react'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { MDXContent } from 'mdx/types'

export default function MdxClient({ mdxText }: { mdxText: string }) {
  const [CompiledMDX, setCompiledMDX] = useState<(() => MDXContent) | null>(
    null
  )

  useEffect(() => {
    async function parseMdx() {
      try {
        // evaluate()로 mdx 문자열을 리액트 컴포넌트로 변환
        // runtime: 'react/jsx-runtime'에서 가져온 객체들을 넘겨줘야함
        const { default: MdxComponent } = await evaluate(mdxText, {
          ...runtime,
          // (선택) remarkPlugins, rehypePlugins 등 추가 설정 가능
        })
        // evaluate()가 반환하는 MdxComponent는 "MDX로부터 변환된 React 컴포넌트"
        setCompiledMDX(() => MdxComponent)
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
