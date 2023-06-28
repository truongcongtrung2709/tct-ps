import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className=" bg-secondary-color">
      <div className="max-w-screen-2xl m-auto">
        <img className='w-20 m-auto text-center p-4' src="/src/assets/logo/Logo.svg"  alt="" />
      <div className='flex justify-center'>
        <a className='p-3 cursor-pointer' href="https://www.facebook.com/truongcotrung/">
          <span className='text-2xl text-text-color bg-secondary-color'><GrFacebookOption/></span>
        </a>
        <a className='p-3 cursor-pointer' href="https://www.facebook.com/truongcotrung/">
          <span className='text-2xl text-text-color bg-secondary-color'><AiOutlineInstagram/></span>
        </a>
        <a className='p-3 cursor-pointer' href="https://www.facebook.com/truongcotrung/">
          <span className='text-2xl text-text-color bg-secondary-color'><CiTwitter/></span>
        </a>
        <a className='p-3 cursor-pointer' href="https://www.facebook.com/truongcotrung/">
          <span className='text-2xl text-text-color bg-secondary-color'><AiOutlineYoutube/></span>
        </a>
      </div>
      <div className="text-center text-xs p-4">
        <p>Copyright 2023 © TCT Entertainment Pvt. Ltd. All Rights Reserved <br />
        The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
        </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer