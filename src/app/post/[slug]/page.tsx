import React from 'react'
import Post from './Post'
import matter from 'gray-matter'
import { join } from 'node:path'
import { cwd } from 'node:process'

async function getPostMarkDown(slug: string) {
  'use server'
  return matter.read(join(cwd(), `static/post/${decodeURI(slug)}.mdx`))
}

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: Post, frontmatter } = await import(
    `@/../static/post/${decodeURI(slug)}.mdx`
  )
  const { title, date } = frontmatter
  return (
    <div>
      <h1>{title}</h1>
      <div className="text-right">{date}</div>
      <Post />
    </div>
  )
}
export function generateStaticParams() {
  return [{ slug: 'home' }, { slug: 'content' }]
}

export default page
