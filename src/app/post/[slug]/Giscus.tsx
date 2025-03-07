'use client'

import Giscus from '@giscus/react'

function GiscusComp() {
  return (
    <>
      <Giscus
        repo={process.env.GISCUS_REPO as `${string}/${string}`}
        repoId={process.env.GISCUS_REPO_ID!}
        category="Comments"
        categoryId={process.env.GISCUS_CATEGORY_ID}
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark_dimmed"
        lang="ko"
        // loading={'lazy'}
      />
    </>
  )
}

export default GiscusComp
