import {useState} from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate()
  // Toggle menu
  const [isToggle, setIsToggle] = useState<boolean>(false)
  // animate menu
  const [effect, setEffect] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsToggle(!isToggle);
    setEffect(!effect);

  }
  return (
    <nav className=" fixed w-full z-20 top-0 left-0  ">
  <div className=" max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center">
      <img src="/src/assets/logo/Logo.svg" className="h-8 mr-3" alt="TCT Logo"/>
      <span className="self-center text-text-color text-2xl font-semibold whitespace-nowrap ">TCT Playstation</span>
  </a>
  <div className="flex md:order-2">
  <button 
      type="button" className="focus:outline-none font-medium rounded-lg border-none text-xl px-4 py-2 text-center mr-3 md:mr-0  hover:bg-text-color hover:text-secondary-color transition-all duration-500 "><AiOutlineSearch/></button>
     
  <button 
      type="button" className="focus:outline-none font-medium rounded-lg border-none text-sm px-4 py-2 text-center mr-3 md:mr-0  hover:bg-text-color hover:text-secondary-color transition-all duration-500 " onClick={()=>navigate("/signin")}>Sign In</button>
      
      <button data-collapse-toggle="navbar-sticky" type="button" onClick={handleToggleMenu} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
  </div>
  <div className={` ${isToggle  ? "": "hidden"} ${effect && "animate-fadeIn"}  items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky" onAnimationEnd={()=> setEffect(false)}>
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      <li>
        <a href="/" className="block py-2 pl-3 pr-4 md:p-2 hover:bg-text-color hover:text-secondary-color rounded-md transition-all duration-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/" className="block py-2 pl-3 pr-4 md:p-2 hover:bg-text-color hover:text-secondary-color rounded-md transition-all duration-500   ">Games</a>
      </li>
      <li>
        <a href="/" className="block py-2 pl-3 pr-4 md:p-2 hover:bg-text-color hover:text-secondary-color rounded-md transition-all duration-500 ">Hardware</a>
      </li>
      <li>
        <a href="/" className="block py-2 pl-3 pr-4 md:p-2  hover:bg-text-color hover:text-secondary-color rounded-md transition-all duration-500">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Header