import React, { ReactNode } from 'react'

function MdxLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`prose prose-pre:bg-[transparent] m-auto max-w-[850px] rounded-md bg-neutral-100 px-10 py-6 text-black ${proseFont} prose-ul prose-li:my-0.5 prose-ul:px-4 prose-li:px-0`}
    >
      {children}
    </div>
  )
}
const proseFont = [
  'prose-h1:text-3xl prose-h1:text-center prose-h1:mt-6 prose-h1:mb-10',
  'prose-h2:text-blue-500 prose-h2:text-sm',
  'prose-h5:mt-4 prose-h5:text-sm prose-h5:text-neutral-800 prose-h5:font-extrabold ',
  'prose-p:my-0 prose-ul:mt-2',
  'text-[15px]',
  // 'prose-p:text-[15px] prose-li:text-[15px]',
].join(' ')

export default MdxLayout
