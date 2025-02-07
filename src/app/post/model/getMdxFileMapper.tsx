import { readdirSync } from 'node:fs'
import path from 'path'
import { cwd } from 'process'
import type { FC } from 'react'

interface Frontmatter {
  slug: string
  title: string
  date: string
  tags?: string[]
  content?: string
}
interface MDXFile {
  frontmatter: Frontmatter
  default: FC
}

const MDX_PATH = path.join(cwd(), 'static/post')
const filenames = readdirSync(MDX_PATH)

const MdxFileObj: Record<string, MDXFile> = {}
let isCalled = false

/* {[slug]: MDXFile} 인 객체 fileObj를 반환하는 함수입니다. 
 캐싱하여 여러번 호출시에도 이전에 만들어둔 fileObj를 반환합니다.
*/

export const getMDXFileMapper = async () => {
  if (isCalled) return MdxFileObj
  isCalled = true

  await makeMDXFileObj(filesPromise)

  return MdxFileObj
}

async function makeMDXFileObj(filesPromise: Promise<MDXFile>[]) {
  const files = await Promise.all(filesPromise)
  files.forEach((file) => {
    MdxFileObj[file.frontmatter.slug] = file
  })
}

const filesPromise = filenames.map(
  (filename) => import('../../../../static/post/' + filename)
)
