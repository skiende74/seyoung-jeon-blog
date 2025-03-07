import { getMDXBySlug } from '../../model/MDXFileService'
import PostingForm from './postingForms'

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { default: _, ...mdxFile } = (await getMDXBySlug())[
    decodeURIComponent(slug)
  ]

  return <PostingForm mdxFile={mdxFile} />
}

export default Page
