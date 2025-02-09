import { readdirSync } from 'fs'
import path from 'path'
import { cwd } from 'process'
import { FC } from 'react'

export interface Frontmatter {
  slug: string
  title: string
  date: string
  tags?: string[]
  summary?: string
}

interface MDXFile {
  frontmatter: Frontmatter
  default: FC
}

class MDXFileLoader {
  #mdxFileObj: Record<string, MDXFile> = {}
  #MDX_PATH = path.join(cwd(), 'static/post')
  #filenames = readdirSync(this.#MDX_PATH)

  async getMapper() {
    const alreadyLoaded = Object.keys(this.#mdxFileObj).length > 0
    if (!alreadyLoaded) await this.#loadMDXFileObj()
    return this.#mdxFileObj
  }

  async #loadMDXFileObj() {
    const filesPromise = this.#filenames.map(
      (filename) => import('../../../../static/post/' + filename)
    )

    const files = await Promise.all(filesPromise)
    files.forEach((file) => {
      this.#mdxFileObj[file.frontmatter.slug] = file
    })
  }
}

const mdxFileLoader = new MDXFileLoader()
export default mdxFileLoader
