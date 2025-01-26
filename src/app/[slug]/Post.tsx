// "use client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MDEditor from "@uiw/react-md-editor";

interface Props {
  markdown: { content: string };
}

function Post({ markdown }: Props) {
  console.log(markdown);

  return (
    <div className="">
      <div className="flex justify-center ">
        <div className="w-[40rem] h-[50rem]">
          <Markdown
            remarkPlugins={[remarkGfm]}
            className="prose prose-zinc"
          >{`# 제목\n\n어쩌구`}</Markdown>
          {/* <MDEditor.Markdown
            source={`# 제목\n\n어쩌구`}
            style={{ backgroundColor: "transparent" }}
          ></MDEditor.Markdown> */}
        </div>
      </div>
    </div>
  );
}

export default Post;
