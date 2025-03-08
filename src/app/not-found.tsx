import { redirect } from 'next/navigation'

function NotFound() {
  redirect('/post')
}

export default NotFound
