import { auth } from '@/auth'
import { NextRequest, NextResponse } from 'next/server'

export default auth((req: NextRequest & { auth: any }) => {
  if (req.auth && req.auth.user.email) return NextResponse.next()
  return NextResponse.redirect(`${process.env.BASE_URL}/api/auth/signin`)
})
export const config = {
  matcher: ['/post/edit/:path*'],
}
