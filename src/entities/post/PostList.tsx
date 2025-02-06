import React from 'react'
import PostItem from './PostItem'
import { readdirSync } from 'fs'
import { cwd } from 'process'
import path from 'path'

function PostList() {
  const filenames = readdirSync(path.join(cwd(), 'static/post'))
  const filenames2 = filenames.map((filename) =>
    filename.replace(/\.mdx?$/, '')
  )

  return (
    <section className="flex flex-col gap-y-3">
      {filenames2.map((filename) => (
        <PostItem
          title={filename}
          href={`/post/${filename}`}
          date={new Date()}
          content={'content'}
          tags={['tag1', 'tag2']}
        />
      ))}
    </section>
  )
}

export default PostList
