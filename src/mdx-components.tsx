import type { MDXComponents } from 'mdx/types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '')

      // 언어가 표시된 code
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          children={String(children).replace(/\n$/, '')}
          style={dark}
          language={match[1]}
          // PreTag="div"
        />
      ) : (
        // 언어를 표시하지않은 code
        <code {...props} className={className}>
          {children}
        </code>
      )
    },
    ...components,
  }
}
