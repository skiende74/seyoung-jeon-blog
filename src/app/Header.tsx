import type { Route } from 'next'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoPersonSharp } from 'react-icons/io5'
import VelogIcon from './velog.svg'
import Image from 'next/image'
interface NavIcon {
  href: Route
  icon: ReactNode
}

const navIcons: NavIcon[] = [
  {
    href: 'https://velog.io/@skiende74',
    icon: (
      <Image
        src={VelogIcon.src}
        width={24}
        height={24}
        color="yellow"
        className="rounded-md bg-white"
        alt="velog"
      />
    ),
    // icon: <div className="text-sm">velog</div>,
  },
  {
    href: 'https://www.github.com/skiende74',
    icon: <FaGithub />,
  },
  {
    href: '/about',
    icon: <IoPersonSharp />,
  },
]

function Header({ title }: { title: string }) {
  return (
    <nav className="sticky top-0 flex h-12 w-full items-center justify-center bg-neutral-800 px-3 py-1 text-white">
      <div className="flex w-[50rem] items-center justify-between">
        <Link href="/post">
          <div className="text-md font-semibold">{title}</div>
        </Link>
        <ul className="flex items-center gap-x-2.5">
          {navIcons.map(({ href, icon }) => (
            <Link key={href} href={href}>
              {icon}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
