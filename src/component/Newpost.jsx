import React from 'react';
import { BsImageFill } from 'react-icons/bs';
import { BiSolidCalendar } from 'react-icons/bi';
import { MdEditNote } from 'react-icons/md';
import profileImg from '../assets/profile.jpeg';

const Newpost = () => {
  return (
    <section className="newpost">
        <div className="startpost">
        <img src={profileImg} alt="" className='avatar' />
        <textarea name="" id=""  placeholder='Start post'/>
        </div>
        <div className="file-wrapper">
        <div className="file-input">
            <input type="file" id="image-input" accept="image/*" className="file-input_input" />
            <label for="image-input" class="image-label">
            <BsImageFill className="input-icon" />
            <span>Media</span>
            </label>
        </div>
        <div className="file-input">
            <input type="file" id="image-input" accept="image/*" className="file-input_input" />
            <label for="image-input" class="image-label">
            <BiSolidCalendar className="input-icon" />
            <span>Event</span>
            </label>
        </div>
        <div className="file-input">
            <input type="file" id="image-input" accept="image/*" className="file-input_input" />
            <label for="image-input" class="image-label">
            <MdEditNote className="input-icon" />
            <span>Write article</span>
            </label>
        </div>
        </div>
    </section>
  )
}

export default Newpost