import type { MDXComponents } from 'mdx/types'
import { Prism } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '')

      // 언어가 표시된 code
      return !inline && match ? (
        <Prism
          {...props}
          // style={coy}
          language={match[1]}
          showLineNumbers={true}
        >
          {String(children).replace(/\n$/, '')}
        </Prism>
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

// coy
// dark
// funky
// okaidia
// solarizedlight
// tomorrow
// twilight
// prism
// a11yDark
// atomDark
// base16AteliersulphurpoolLight
// cb
// coldarkCold
// coldarkDark
// coyWithoutShadows
// darcula
// dracula
// duotoneDark
// duotoneEarth
// duotoneForest
// duotoneLight
// duotoneSea
// duotoneSpace
// ghcolors
// gruvboxDark
// gruvboxLight
// holiTheme
// hopscotch
