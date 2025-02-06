import React from 'react'
import { getMDXFileMapper } from '../model/getMdxFileMapper'

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: Post, frontmatter } = (await getMDXFileMapper())[
    decodeURI(slug)
  ]

  const { title, date } = frontmatter
  return (
    <article>
      <h1>{title}</h1>
      <div className="text-right">{date}</div>
      <Post />
    </article>
  )
}

export function generateStaticParams() {
  const slugs = Object.keys(getMDXFileMapper())
  return slugs.map((slug) => ({ slug }))
}

export default page
