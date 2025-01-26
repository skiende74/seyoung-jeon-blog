import React from "react";
import Post from "./Post";
import matter from "gray-matter";
import { join } from "node:path";
import { cwd } from "node:process";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const markdown = matter.read(join(cwd(), `static/post/${decodeURI(slug)}.md`));
  console.log("mark", markdown);
  return (
    <div>
      <Post markdown={markdown.content} />
    </div>
  );
}

export default page;
