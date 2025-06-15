import { getMDXBySlug } from '../model/MDXFileService'
import PostingForm from '../../../component/post/write/PostingForms'
import { MDXFile } from '../model/getMdxFileMapper'

async function Page() {
  const emptyMdxFile: Omit<MDXFile, 'default'> = {
    frontmatter: { slug: '', title: '', date: '' },
    rawMDX: '',
  }

  return <PostingForm mdxFile={emptyMdxFile} />
}

export default Page
