import React from 'react'
import { BsThreeDots } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"

const PostFeed = () => {

  return (
    <section>
      <div className="topInfo">
        <img src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <p>Rachael Adetola</p>
        <p>Forntend developer | Designer | SEO optimization.</p>
        <p>1w</p>
      </div>
      <div>
        <BsThreeDots />
        <IoMdClose />
      </div>
    </section>
  )
}

export default PostFeed