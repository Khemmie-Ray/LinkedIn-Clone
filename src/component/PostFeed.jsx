import React, { useEffect, useState } from 'react'
import { BsThreeDots, BsSendFill } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import profileImg from '../assets/profile.jpeg'
import { SlLike } from 'react-icons/sl'
import { FaCommentDots } from 'react-icons/fa'
import { BiRepost } from 'react-icons/bi'
import { db } from '../config/firebase'
import { getDocs , collection} from 'firebase/firestore'

const PostFeed = () => {
  const [feedData, setFeedData] = useState([])
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const postCollectionRef = collection(db, "postcard");

  useEffect(() => {
    const getPostList = async () => {
      try {
        const data = await getDocs(postCollectionRef) 
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
        setFeedData(filteredData)
        console.log(filteredData)  
      } catch (err) {
        console.error(err)
      }
    } 
    getPostList()
  }, [])

  return (
    <section >
    { feedData.map((info, index) => ( 
      <div className='post-Card' key={info.id}>
      <div className="topInfo">
      <div className="post-profile">
        <img src={info.profileImg} alt="" />
        <p>{info.username} <br /> <span>{info.headline}</span> <br /> <span>{info.date}</span></p>
      </div>
      <div className='post-icons'>
        <BsThreeDots className='p-icon' />
        <IoMdClose />
      </div>
      </div>
      <div className="contentInfo">
      <p>
        {expanded ? info.content[0] : info.content[0].split(' ').slice(0, 18).join(' ')}
        {!expanded && info.content[0].split(' ').length > 18 &&(
          <span>
            ...
            <a href="#" onClick={toggleExpand}>See more</a>
          </span>
        )} 
      </p> 
        <img src={info.content[1]} alt="" />
      </div>
      <div className='commentBox'>
        <button><SlLike className='b-icon' /> Like</button>
        <button><FaCommentDots className='b-icon' /> Comment</button>
        <button><BiRepost className='b-icon' /> Repost</button>
        <button><BsSendFill className='b-icon' /> Send</button>
      </div>
      </div>
   ))}
    </section>
  )
}

export default PostFeed