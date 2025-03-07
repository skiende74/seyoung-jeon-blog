// remark-raw-mdx.ts
import { parse } from 'acorn'
import type { Program } from 'estree'
import matter from 'gray-matter'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'

/**
 * remarkRawMdx 플러그인:
 *  - MDX 파일의 원본 문자열에서 frontmatter를 제거하고
 *  - 나머지 본문을 "export const rawMDX = ..." 형태로 ESM 구문에 삽입하여
 *  - import 시에 { rawMDX }로 활용할 수 있게 해준다.
 */
export const remarkRawMdx: Plugin<[], Root> = () => {
  return (tree, file) => {
    // file.value가 string이 아닐 수도 있으니 체크
    if (typeof file.value !== 'string') {
      return tree
    }

    // (1) frontmatter 추출
    const source = file.value
    const parsed = matter(source)
    // parsed.content: frontmatter 제외한 본문
    // parsed.data: frontmatter 파싱 결과 (예: { title: '...' })

    // (2) ESM export 코드로 만들기
    const code = `export const rawMDX = ${JSON.stringify(parsed.content)};`

    // (3) acorn으로 코드 파싱 -> AST 생성
    // acorn이 반환하는 AST와 @types/estree.Program이 약간 달라서 캐스팅
    const acornAst = parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',
    })
    const estree = acornAst as unknown as Program

    // (4) mdxjsEsm 노드를 트리에 추가
    tree.children.push({
      type: 'mdxjsEsm',
      value: code,
      data: { estree },
    })

    return tree
  }
}
