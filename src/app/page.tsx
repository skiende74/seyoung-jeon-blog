import PostList from "@/entities/post/PostList";

export default function Home() {
  return (
    // <div className="">
    <div className="flex justify-center ">
      <div className="w-[40rem] h-[50rem]">
        <PostList />
      </div>
    </div>
    // </div>
  );
}
