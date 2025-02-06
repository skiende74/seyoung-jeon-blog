import { readdirSync } from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
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
  const filenames = readdirSync(path.join(cwd(), 'static/post'))
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx?$/, ''),
  }))
}

export default page
