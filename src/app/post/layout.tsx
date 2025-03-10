import { ReactNode } from 'react'

export default function Layout({
  children,
}: {
  children: ReactNode | ReactNode[]
}) {
  return <div className="flex justify-center">{children}</div>
}
