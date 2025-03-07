declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_GISCUS_REPO: `${string}/${string}`
        NEXT_PUBLIC_GISCUS_REPO_ID: string
        NEXT_PUBLIC_GISCUS_CATEGORY_ID: string
      }
    }
  }
}
