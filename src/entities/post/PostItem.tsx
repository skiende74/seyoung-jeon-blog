import { DOMAIN_URL } from "@/workspace/const";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  date: Date;
  content: string;
  tags: string[];
  href: string;
}
function PostItem({ title, date, content, tags, href }: Props) {
  return (
    <Link href={`${DOMAIN_URL}/${href}`}>
      <article className="rounded-md px-4 py-2 bg-neutral-700 shadow-md shadow-neutral-800">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-neutral-500">{content}</p>
        <div className="mt-1 flex justify-between">
          <div className="flex gap-x-[0.4rem] gap-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="rounded-lg text-xs bg-neutral-600 text-neutral-100 px-2"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="text-xs">{`${date.getFullYear().toString().slice(-2).padStart(2, "0")}. ${(
            date.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}. ${date.getDate().toString().padStart(2, "0")}`}</div>
        </div>
      </article>
    </Link>
  );
}

export default PostItem;
