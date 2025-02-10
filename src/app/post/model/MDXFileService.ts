import { MDXFile } from './getMdxFileMapper'
import mdxFileLoader from './MDXFileLoader'

class MDXFileService {
  #mdxLoader = mdxFileLoader
  #slugMapper: Record<string, MDXFile> = {}
  #tagMapper: Record<string, MDXFile[]> = {}

  async init() {
    await this.#makeBySlug()
    await this.#makeByTag()
  }
  getBySlug() {
    return this.#slugMapper
  }
  getByTag() {
    return this.#tagMapper
  }

  async #makeBySlug() {
    if (Object.keys(this.#slugMapper).length > 0) return
    console.log('load')
    const mdxFiles = await this.#mdxLoader.get()
    mdxFiles.forEach((file) => {
      this.#slugMapper[file.frontmatter.slug] = file
    })
  }
  async #makeByTag() {
    if (Object.keys(this.#tagMapper).length > 0) return
    const mdxFiles = await this.#mdxLoader.get()
    mdxFiles.forEach((file) => {
      file.frontmatter.tags?.forEach((tag) => {
        if (!(tag in this.#tagMapper)) this.#tagMapper[tag] = []
        this.#tagMapper[tag].push(file)
      })
    })
  }
}

const mdxFileService = new MDXFileService()
await mdxFileService.init() // build 시, start시 딱한번씩만 실행됨.

export const getMDXBySlug = async () => await mdxFileService.getBySlug()
export const getMDXByTag = async () => await mdxFileService.getByTag()
