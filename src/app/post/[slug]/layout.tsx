export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-white prose-p:text-white prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white prose-code:text-white prose-code:bg-gray-700 m-auto max-w-[700px]">
      {children}
    </div>
  )
}
