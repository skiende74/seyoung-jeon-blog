'use server'

import { writeFileSync } from 'fs'
import path from 'path'
import { cwd } from 'process'
import { getMDXFileMapper } from '../post/model/getMdxFileMapper'

interface ArticleSubmit {
  title: string
  slug: string
  date: string
  summary: string
  tags: string[]
  content: string
}
export const submitAction = async ({
  content,
  title,
  slug,
  date,
  summary,
  tags,
}: ArticleSubmit) => {
  const frontmatterString = `---
title: ${title}
slug: ${slug}
date: ${date}
summary: ${summary}
tags: [${tags.join(', ')}]
---

`
  const mdxs = await getMDXFileMapper()
  if (Object.keys(mdxs).includes(slug))
    return { isSuccess: false, message: '이미 존재하는 slug입니다.' }
  if (title === '') return { isSuccess: false, message: '제목을 작성해주세요' }
  const result = frontmatterString + content
  const fileName = title.replace(/[\s,]/, '-') + '.mdx'
  writeFileSync(path.join(cwd(), 'static/post', fileName), result)
  console.log(`post: 글쓰기를 mdx파일로 저장완료 fileName:${fileName}`)

  return { isSuccess: true }
}
