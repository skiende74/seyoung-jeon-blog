import React from 'react'

async function getMdx() {
  return await import('../../../static/about.mdx')
}
async function page() {
  const { default: MDXAbout } = await getMdx()

  return <MDXAbout />
}

export default page
