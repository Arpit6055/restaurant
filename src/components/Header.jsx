import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config"
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {useStateValue} from "../context/stateProvider"
import { actionType } from '../context/reducer';

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider(app);
  const [{user}, dispatch] = useStateValue();
  const login = async ()=>{
    const {user : { providerData}} = await signInWithPopup(firebaseAuth, provider);
    console.log(providerData[0].photoURL);
    dispatch({
      type : actionType.SET_USER,
      user : providerData[0]
    });
  }
  return (
    <header className='w-screen fixed z-50 p-6 px-16'>
      {/* Desktop and tablet */}
      <div className='hidden md:flex w-full'>
        <Link to={"/"} className='flex items-center gap-2'>
          <motion.img src={Logo} whileTap={{ scale: 0.6, rotate: 360 }} alt="Logo" className='w-10 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='flex items-center ml-auto gap-8'>
          <ul className='flex  items-center space-x-10 '>
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
          <div className='relattive'>
            <motion.img whileTap={{ scale: 0.6 }} onClick={login} src={user?user.photoURL:Avatar} className="w-10 min-w-[40px] min-h-[40px] drop-shadow-2xl cursor-pointer" alt="user's profile" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex md:hidden w-full h-full'>mobile</div>
    </header>
  )
}

export default Header
