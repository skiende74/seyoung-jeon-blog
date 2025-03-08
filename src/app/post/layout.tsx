import PostList from '@/app/post/PostList'
import { ReactNode } from 'react'

export default function Layout({
  children,
}: {
  children: ReactNode | ReactNode[]
}) {
  return (
    <div className="flex justify-center">
      <div className="h-[50rem] w-[40rem]">{children}</div>
    </div>
  )
}
