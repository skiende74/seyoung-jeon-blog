import React, { ReactNode } from 'react'

function MdxLayout({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-pre:bg-[transparent] prose-ul prose-li:my-0.5 prose-h1:text-3xl prose-h1:text-center prose-h1:mt-6 prose-h1:mb-10 prose-h4:text-blue-500 prose-h4:text-sm prose-h5:text-sm prose-h5:text-neutral-500 prose-h5:font-extrabold prose-ul:px-4 prose-li:px-0 m-auto max-w-[850px] rounded-md bg-neutral-100 px-10 py-6 text-black">
      {children}
    </div>
  )
}

export default MdxLayout
