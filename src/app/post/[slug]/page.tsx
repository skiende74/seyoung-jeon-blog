import React from 'react'
import { getMDXFileMapper } from '../model/getMdxFileMapper'

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: MDXPost, frontmatter } = (await getMDXFileMapper())[
    decodeURI(slug)
  ]

  const { title, date } = frontmatter
  return (
    <article>
      <h1>{title}</h1>
      <div className="text-right">{date}</div>
      <MDXPost />
      <div className="h-30" />
    </article>
  )
}

export function generateStaticParams() {
  const slugs = Object.keys(getMDXFileMapper())
  return slugs.map((slug) => ({ slug }))
}

export default page
