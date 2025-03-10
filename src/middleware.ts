import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  if (req.auth && req.auth.user.email === process.env.AUTH_ADMIN_EMAIL)
    return NextResponse.next()
  return NextResponse.redirect(`${process.env.BASE_URL}/api/auth/signin`)
})
export const config = {
  matcher: ['/post/edit/:path*'],
}
