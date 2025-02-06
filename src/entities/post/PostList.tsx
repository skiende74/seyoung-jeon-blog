import React from 'react'
import PostItem from './PostItem'

function PostList() {
  return (
    <section className="flex flex-col gap-y-3">
      <PostItem
        title="포스팅1"
        href="/post/포스팅1"
        date={new Date()}
        content={'content'}
        tags={['tag1', 'tag2']}
      />
      <PostItem
        title="aa"
        href="/aa"
        date={new Date()}
        content={''}
        tags={[]}
      />
    </section>
  )
}

export default PostList
