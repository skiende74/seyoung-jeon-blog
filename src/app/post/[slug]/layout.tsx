export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/github-dark.min.css"
        precedence="medium"
      /> */}
      <div className="prose prose-invert prose-pre:bg-[transparent] m-auto max-w-[700px]">
        {children}
      </div>
    </>
  )
}

// 만약 prose 고칠 일 있으면 아래 참고 (이전에 쓰던 너무 큰 prose 구문)
// 'prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg '
