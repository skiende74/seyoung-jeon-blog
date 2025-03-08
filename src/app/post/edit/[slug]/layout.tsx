import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/base16/atelier-dune-light.min.css"
        precedence="medium"
      />
      <div className="prose prose-invert prose-pre:bg-[transparent] m-auto max-w-[1200px]">
        {children}
      </div>
    </>
  )
}

export default layout
