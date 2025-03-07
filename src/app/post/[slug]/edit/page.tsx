import { getMDXBySlug } from '../../model/MDXFileService'
import PostingForm from './postingForms'

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { default: MDX, frontmatter } = (await getMDXBySlug())[
    decodeURIComponent(slug)
  ]
  console.log(MDX)
  return <PostingForm matter={frontmatter} />
}

export default Page
