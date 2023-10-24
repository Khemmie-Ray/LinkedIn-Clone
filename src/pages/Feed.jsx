import React from 'react'
import Newpost from '../component/Newpost'
import PostFeed from '../component/PostFeed'

const Feed = () => {
  return (
    <div className="feed">
        <Newpost />
        <PostFeed />
    </div>
  )
}

export default Feed