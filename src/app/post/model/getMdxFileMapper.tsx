import { readdirSync } from 'node:fs'
import { fstat } from 'fs'
import path from 'path'
import { cwd } from 'process'
import type { FC } from 'react'

const MDX_PATH = path.join(cwd(), 'static/post')
const filenames = readdirSync(MDX_PATH)

const fileObj: Record<string, { frontmatter: {}; default: FC }> = {}
let isCalled = false

export const getMDXFileMapper = async () => {
  if (isCalled) return fileObj
  isCalled = true

  const filesPromise = filenames.map((filename) => {
    return import('../../../../static/post/' + filename)
  })
  const files = await Promise.all(filesPromise)
  files.forEach((file) => {
    fileObj[file.frontmatter.slug as string] = file
  })

  return fileObj
}
