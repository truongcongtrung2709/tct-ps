import React, { useEffect } from 'react'
import {Tab, initTE} from "tw-elements"
import SignIn from './SignIn/SignIn';
import Signup from './SignUp/Signup';
const Auth = () => {
  useEffect(()=> {
    initTE({Tab});
  })
  return (
    <div className=' bg-cover  flex justify-center py-32 ' style={{backgroundImage:"url('/src/assets/images/backgrounds/signin.jpg')"}}>
    <div className="bg-transparent w-screen mx-auto">
      {/* Tab Navigation */}
      <ul className='mb-5 flex justify-center list-none flex-row flex-wrap border-none pl-0 '
      role='tablist'
      data-te-nav-ref
      >
        <li role='presentation'>
          <a
          href="#tabs-signin"
          className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-medium uppercase leading-tight  hover:text-button-color data-[te-nav-active]:border-button-color data-[te-nav-active]:text-button-color"
          data-te-toggle="pill"
          data-te-target="#tabs-signin"
          data-te-nav-active
          role="tab"
          aria-controls="tabs-signin"
          aria-selected="true"
          >Sign In</a>
        </li>
        <li role="presentation">
          <a
          href="#tabs-signup"
          className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-medium uppercase leading-tight  hover:text-button-color data-[te-nav-active]:border-button-color data-[te-nav-active]:text-button-color"
          data-te-toggle="pill"
          data-te-target="#tabs-signup"
          role="tab"
          aria-controls="tabs-signup"
          aria-selected="false"
          >Sign Up</a>
        </li>
      </ul>
      {/* Tab Content */}
      <div className='pb-8'>
      <div
      className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-signin"
      role="tabpanel"
      aria-labelledby="tabs-signin-tab"
      data-te-tab-active>
      <SignIn/>

      </div>
      <div
      className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-signup"
      role="tabpanel"
      aria-labelledby="tabs-signup-tab"
      >
        <Signup/>
      </div>
      </div>
    </div>
    </div>

  )
}

export default Auth