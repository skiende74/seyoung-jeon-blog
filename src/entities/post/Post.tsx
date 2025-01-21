import React from "react";

function Post({ title, date, content, tags }: { title: string; date: Date; content: string; tags: string[] }) {
  return (
    <article className="rounded-md px-4 py-2 bg-neutral-700 shadow-sm shadow-neutral-900">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-sm text-neutral-500">{content}</p>
      <div className="mt-1 flex justify-between">
        <div className="flex space-x-1 gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="rounded-lg text-xs bg-neutral-700"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="text-xs">{`${date.getFullYear().toString().slice(-2).padStart(2, "0")}. ${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}. ${date.getDate().toString().padStart(2, "0")}`}</div>
      </div>
    </article>
  );
}

export default Post;
