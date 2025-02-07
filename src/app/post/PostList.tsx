import React from 'react'
import PostItem from './PostItem'
import { getMDXFileMapper } from './model/getMdxFileMapper'

async function PostList() {
  const files = await getMDXFileMapper()

  // 날짜 기준으로 역순정렬
  const sortedMdxFiles = Object.values(files).toSorted(
    (file1, file2) =>
      new Date(file2.frontmatter.date).getTime() -
      new Date(file1.frontmatter.date).getTime()
  )

  return (
    <section className="flex flex-col gap-y-4">
      {sortedMdxFiles.map(
        ({ frontmatter: { slug, title, date, summary: content, tags } }) => (
          <PostItem
            key={slug}
            title={title}
            href={`/post/${slug}`}
            date={new Date(date)}
            content={content ?? ''}
            tags={tags ?? []}
          />
        )
      )}
    </section>
  )
}

export default PostList
