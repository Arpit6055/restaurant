import React from 'react'
import Logo from "./img/logo.png"
import Avatar from "./img/avatar.png"
import {MdShoppingBasket} from 'react-icons/md'
const Header = () => {
  return (
    <header className='w-screen fixed z-50 p-6 px-16'>
      {/* Desktop and tablet */}
      <div className='hidden md:flex w-full'>
        <div className='flex items-center gap-2'>
          <img src={Logo} alt="Logo" className='w-10 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </div>
        <div className='flex items-center ml-auto gap-4'>
        <ul className='flex  items-center gap-8 '>
          <li className='text-base font-bold hover:text-red-400 duration-100 transition-all cursor-pointer ease-in-out'>Home</li>
          <li className='text-base font-bold hover:text-red-400 duration-100 transition-all cursor-pointer ease-in-out'>Menu</li>
          <li className='text-base font-bold hover:text-red-400 duration-100 transition-all cursor-pointer ease-in-out'>About Us</li>
          <li className='text-base font-bold hover:text-red-400 duration-100 transition-all cursor-pointer ease-in-out'>Service</li>
        </ul>
        <div className='relative flex items-center justify-center'>
          <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
          <div className='absolute -top-2 -right-3 w-6 h-6 rounded-full bg-red-600 flex justify-center items-center'>
            <p className=' text-xs text-white flex items-center justify-center font-bold'>1</p>
          </div>
        </div>
        <img src={Avatar} className="w-10 min-w-[40px] min-h-[40px] drop-shadow-2xl" alt="user's profile" />
        </div>
      </div>

      {/* Mobile */}
      <div className='flex md:hidden w-full h-full'>mobile</div>
    </header>
  )
}

export default Header
