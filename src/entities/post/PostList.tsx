import React from "react";
import Post from "./Post";

function PostList() {
  return (
    <section className="flex flex-col gap-y-3">
      <Post
        title="aa"
        date={new Date()}
        content={"content"}
        tags={["tag1", "tag2"]}
      />
      <Post
        title="aa"
        date={new Date()}
        content={""}
        tags={[]}
      />
    </section>
  );
}

export default PostList;
