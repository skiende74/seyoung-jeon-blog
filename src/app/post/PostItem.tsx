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
    <Link href={`${href}`}>
      <article className="rounded-md bg-neutral-700 px-4 py-2 shadow-md shadow-neutral-800">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-neutral-500">{content}</p>
        <div className="mt-1 flex justify-between">
          <div className="flex gap-2 gap-x-[0.4rem]">
            {tags.map((tag) => (
              <div
                key={tag}
                className="rounded-lg bg-neutral-600 px-2 text-xs text-neutral-100"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="text-xs">{`${date.getFullYear().toString().slice(-2).padStart(2, '0')}. ${(
            date.getMonth() + 1
          )
            .toString()
            .padStart(
              2,
              '0'
            )}. ${date.getDate().toString().padStart(2, '0')}`}</div>
        </div>
      </article>
    </Link>
  )
}

export default PostItem
