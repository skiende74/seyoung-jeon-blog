import React from 'react'
import PostItem from './PostItem'
import { readdirSync } from 'fs'
import { cwd } from 'process'
import path from 'path'
import { getMDXFileMapper } from './model/getMdxFileMapper'

async function PostList() {
  const filenames = readdirSync(path.join(cwd(), 'static/post'))
  const filenames2 = filenames.map((filename) =>
    filename.replace(/\.mdx?$/, '')
  )
  console.log('mapper', await getMDXFileMapper())
  return (
    <section className="flex flex-col gap-y-3">
      {filenames2.map((filename) => (
        <PostItem
          key={filename}
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
