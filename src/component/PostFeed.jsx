import React from 'react'
import { BsThreeDots, BsSendFill } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import profileImg from '../assets/profile.jpeg'
import { SlLike } from 'react-icons/sl'
import { FaCommentDots } from 'react-icons/fa'
import { BiRepost } from 'react-icons/bi'

const PostFeed = () => {

  return (
    <section className='post-Card'>
      <div className="topInfo">
      <div className="post-profile">
        <img src={profileImg} alt="" />
        <p>Rachael Adetola <br /> <span>Frontend developer | Designer | SEO optimization.</span> <br /> <span>1w</span></p>
      </div>
      <div className='post-icons'>
        <BsThreeDots className='p-icon' />
        <IoMdClose />
      </div>
      </div>
      <div className="contentInfo">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aspernatur animi earum ab explicabo quod, sint nisi odit exercitationem saepe enim sapiente ea non officiis?</p>
        <a href="#">...see more</a>
        <img src="https://images.pexels.com/photos/18193282/pexels-photo-18193282/free-photo-of-people-kitesurfing-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
      </div>
      <div className='commentBox'>
        <button><SlLike className='b-icon' /> Like</button>
        <button><FaCommentDots className='b-icon' /> Comment</button>
        <button><BiRepost className='b-icon' /> Repost</button>
        <button><BsSendFill className='b-icon' /> Send</button>
      </div>
    </section>
  )
}

export default PostFeed