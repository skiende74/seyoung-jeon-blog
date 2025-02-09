import { MDXFile } from './getMdxFileMapper'
import mdxFileLoader from './MDXFileLoader'

class MDXFileService {
  #mdxLoader = mdxFileLoader
  #slugMapper: Record<string, MDXFile> = {}
  #tagMapper: Record<string, MDXFile[]> = {}

  constructor() {
    this.#makeBySlug()
    this.#makeByTag()
  }
  getBySlug() {
    return this.#slugMapper
  }
  getByTag() {
    return this.#tagMapper
  }

  async #makeBySlug() {
    const mdxFiles = await this.#mdxLoader.get()
    mdxFiles.forEach((file) => {
      this.#slugMapper[file.frontmatter.slug] = file
    })
  }
  async #makeByTag() {
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
export default mdxFileService
