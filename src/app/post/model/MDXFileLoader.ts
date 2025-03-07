import { readdirSync } from 'fs'
import path from 'path'
import { cwd } from 'process'
import { MDXFile } from './getMdxFileMapper'
// import { makeMDX } from './remarkMdx'

export interface Frontmatter {
  slug: string
  title: string
  date: string
  tags?: string[]
  summary?: string
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
    const filesPromise = this.#filenames.map((filename) => {
      return import('../../../../static/post/' + filename)
      // return makeMDX(
      //   path.join(__dirname, '../../../../static/post/') + filename
      // )
    })

    const files = await Promise.all(filesPromise)
    files.forEach((file) => {
      this.#mdxFiles.push(file)
    })
  }
}

const mdxFileLoaderInstance = new MDXFileLoader()
await mdxFileLoaderInstance.load() // build 시, start시 딱한번씩만 실행됨.
export default mdxFileLoaderInstance
