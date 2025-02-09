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
  #mdxFiles: MDXFile[] = []
  #MDX_PATH = path.join(cwd(), 'static/post')
  #filenames = readdirSync(this.#MDX_PATH)

  async get() {
    const alreadyLoaded = this.#mdxFiles.length > 0
    if (!alreadyLoaded) await this.load()
    return this.#mdxFiles
  }

  async load() {
    const filesPromise = this.#filenames.map(
      (filename) => import('../../../../static/post/' + filename)
    )

    const files = await Promise.all(filesPromise)
    files.forEach((file) => {
      this.#mdxFiles.concat(file)
    })
  }
}

const mdxFileLoaderInstance = new MDXFileLoader()
mdxFileLoaderInstance.load()
export default mdxFileLoaderInstance
