import PostList from '@/app/post/PostList'

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="h-[50rem] w-[40rem]">
        <PostList />
      </div>
    </div>
  )
}
