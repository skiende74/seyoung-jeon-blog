import { getMDXBySlug } from '../../model/MDXFileService'
import PostingForm from './PostingForms'

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = decodeURIComponent((await params).slug)

  const { default: _, ...mdxFile } = (await getMDXBySlug())[slug]

  return <PostingForm mdxFile={mdxFile} />
}

export default Page
