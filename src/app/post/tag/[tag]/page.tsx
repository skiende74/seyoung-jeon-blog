import React from 'react'
import PostItem from '../../PostItem'
import { getMDXByTag } from '../../model/MDXFileService'

async function PostList({ params }: { params: Promise<{ tag: string }> }) {
  const tag = decodeURIComponent((await params).tag)
  console.log('tag', tag)
  const files = (await getMDXByTag())[tag]

  // 날짜 기준으로 역순정렬
  const sortedMdxFiles = Object.values(files).toSorted(
    (file1, file2) =>
      new Date(file2.frontmatter.date).getTime() -
      new Date(file1.frontmatter.date).getTime()
  )

  return (
    <section className="flex flex-col gap-y-4 pb-8">
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
