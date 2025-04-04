'use server'

import { commitMarkdownFile } from './octokit'

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
title: '${title}'
slug: ${slug}
date: ${date}
summary: ${summary}
tags: [${tags.join(', ')}]
---

`
  if (title === '') return { isSuccess: false, message: '제목을 작성해주세요' }
  const result = frontmatterString + content
  const fileName = slug + '.mdx'
  //   writeFileSync(path.join(cwd(), 'static/post', fileName), result)
  await commitMarkdownFile(fileName, result)

  return { isSuccess: true }
}
