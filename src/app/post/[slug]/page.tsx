import React from 'react'
import { getMDXFileMapper } from '../model/getMdxFileMapper'
import { getMDXBySlug } from '../model/MDXFileService'
import GiscusComp from './Giscus'

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { default: MDXPost, frontmatter } = (await getMDXBySlug())[
    decodeURIComponent(slug)
  ]

  const { title, date } = frontmatter
  return (
    <article className="mt-5 mb-20 rounded-xl bg-neutral-700 px-15 py-10">
      <h1>{title}</h1>
      <div className="text-right">{date}</div>
      <MDXPost />
      <GiscusComp />
    </article>
  )
}

export function generateStaticParams() {
  const slugs = Object.keys(getMDXFileMapper())
  return slugs.map((slug) => ({ slug }))
}

export default page
