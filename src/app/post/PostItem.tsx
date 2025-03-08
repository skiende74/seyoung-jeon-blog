import { Route } from 'next'
import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  date: Date
  content: string
  tags: string[]
  href: string
}
function PostItem({ title, date, content, tags, href }: Props) {
  return (
    <article className="rounded-md bg-neutral-700 px-4 py-2 shadow-md shadow-neutral-800">
      <Link href={`${href}` as Route}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-neutral-500">{content}</p>
      </Link>
      <div className="mt-3.5 flex justify-between">
        <div className="flex gap-x-[0.4rem]">
          {tags.map((tag) => (
            <Link key={tag} href={`/post/tag/${tag}` as Route}>
              <div className="rounded-lg bg-neutral-600 px-2 text-xs text-neutral-100">
                {tag}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-xs">{getDateString(date)}</div>
      </div>
    </article>
  )
}

export default PostItem

const getDateString = (date: Date) => {
  const year = date.getFullYear().toString().slice(-2).padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const dates = date.getDate().toString().padStart(2, '0')

  return `${year}. ${month}. ${dates}`
}
