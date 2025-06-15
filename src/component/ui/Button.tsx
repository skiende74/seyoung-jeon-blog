import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

function Button({
  onClick,
  children,
  className,
}: {
  onClick: () => void
  children: ReactNode | ReactNode[]
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'flex cursor-pointer items-center gap-x-1 rounded-md bg-neutral-200 p-1.5 text-sm text-neutral-900',
        className ?? ''
      )}
    >
      {children}
    </button>
  )
}

export default Button
