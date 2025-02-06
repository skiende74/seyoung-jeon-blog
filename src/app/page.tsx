import PostList from '@/entities/post/PostList'

export default function Home() {
  return (
    // <div className="">
    <div className="flex justify-center">
      <div className="h-[50rem] w-[40rem]">
        <PostList />
      </div>
    </div>
    // </div>
  )
}
