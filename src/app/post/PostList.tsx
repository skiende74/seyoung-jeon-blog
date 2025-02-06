import React from 'react'
import PostItem from './PostItem'
import { getMDXFileMapper } from './model/getMdxFileMapper'

async function PostList() {
  const files = await getMDXFileMapper()

  return (
    <section className="flex flex-col gap-y-3">
      {Object.values(files).map(({ frontmatter }) => (
        <PostItem
          key={frontmatter.slug}
          title={frontmatter.title}
          href={`/post/${frontmatter.slug}`}
          date={new Date(frontmatter.date)}
          content={'content'}
          tags={frontmatter.tag ?? ['tag1', 'tag2']}
        />
      ))}
    </section>
  )
}

export default PostList
