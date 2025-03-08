'use server'

import { Octokit } from '@octokit/rest'

export async function commitMarkdownFile(
  fileName: string,
  fileContent: string
) {
  // GitHub Personal Access Token으로 인증
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  // 레포지토리 정보 (각자에 맞게 수정)
  const owner = 'skiende74'
  const repo = 'seyoung-jeon-blog'
  const branch = 'main'

  // 파일 경로 지정: static 폴더 아래 [파일명].md
  const path = `static/post/${fileName}`
  const message = `Add ${fileName} via Contents API server action`

  // 텍스트를 base64 인코딩
  const base64Content = Buffer.from(fileContent).toString('base64')

  // 파일 커밋 API 호출: 파일이 없으면 새로 생성, 있으면 업데이트
  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path,
    message,
    content: base64Content,
    branch,
  })

  return `${fileName}.md 파일이 ${branch} 브랜치의 static 폴더에 커밋되었습니다.`
}
