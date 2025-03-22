'use client'

import Giscus from '@giscus/react'

function GiscusComp() {
  return (
    <Giscus
      repo={process.env.NEXT_PUBLIC_GISCUS_REPO}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID}
      category="Comments"
      categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="gruvbox_dark"
      lang="ko"
      // loading={'lazy'}
    />
  )
}

export default GiscusComp
