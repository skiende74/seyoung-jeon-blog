import { ReactNode } from 'react'

async function layout({
  children,
  params,
}: {
  children: ReactNode | ReactNode[]
  params: Promise<{ tag: string }>
}) {
  const tag = decodeURIComponent((await params).tag)
  return (
    <div>
      <h1 className="mb-4 flex gap-x-2 font-semibold">
        <p>tag로 조회 :</p>
        <p>{tag}</p>
      </h1>
      {children}
    </div>
  )
}

export default layout
