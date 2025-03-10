declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_GISCUS_REPO: `${string}/${string}`
        NEXT_PUBLIC_GISCUS_REPO_ID: string
        NEXT_PUBLIC_GISCUS_CATEGORY_ID: string
        GITHUB_TOKEN: string
        AUTH_GOOGLE_ID: string
        AUTH_GOOGLE_SECRET: string
        AUTH_GOOGLE_REDIRECTION_URL: string
        AUTH_SECRET: string
      }
    }
  }
}
