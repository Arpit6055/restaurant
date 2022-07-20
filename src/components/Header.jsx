import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/stateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider(app);
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setisMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setisMenu(!isMenu);
    }
  };
  const logout = ()=>{
    setisMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    })
  }

  return (
    <header className="w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-slate-100">
      {/* Desktop and tablet */}
      <div className="hidden md:flex w-full">
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img
            src={Logo}
            whileTap={{ scale: 0.6, rotate: 360 }}
            alt="Logo"
            className="w-10 object-cover"
          />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="flex items-center ml-auto gap-8">
          <motion.ul
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex  items-center space-x-10 "
          >
            <li className="text-base font-bold hover:text-red-400 duration-100 transition-all cursor-pointer ease-in-out">
              Home
            </li>
            <li className="text-base font-bold hover:text-red-400 duration-100 transition-all cursor-pointer ease-in-out">
              Menu
            </li>
            <li className="text-base font-bold hover:text-red-400 duration-100 transition-all cursor-pointer ease-in-out">
              About Us
            </li>
            <li className="text-base font-bold hover:text-red-400 duration-100 transition-all cursor-pointer ease-in-out">
              Service
            </li>
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
            <div className="absolute -top-2 -right-3 w-6 h-6 rounded-full bg-red-600 flex justify-center items-center">
              <p className=" text-xs text-white flex items-center justify-center font-bold">
                1
              </p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              onClick={login}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
              alt="Profile"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0.6, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.6, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-2xl rounded-lg flex flex-col absolute right-0 top-20"
              >
                {user && user.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor ">
                      New Items <MdAdd></MdAdd>
                    </p>
                  </Link>
                )}
                <p onClick={logout} className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor ">
                  Logout <MdLogout></MdLogout>
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden justify-between items-center w-full h-full">
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img
            src={Logo}
            whileTap={{ scale: 0.6, rotate: 360 }}
            alt="Logo"
            className="w-10 object-cover"
          />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="relative rounded-lg">
          <motion.img
            whileTap={{ scale: 0.6 }}
            onClick={login}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
            alt="Profile"
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0.6, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.6, scale: 0.6 }}
              className="w-40 bg-gray-300 shadow-2xl rounded-lg flex flex-col absolute right-0 top-20"
            >
              {user && user.email === process.env.REACT_APP_ADMIN_EMAIL && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor ">
                    New Items <MdAdd></MdAdd>
                  </p>
                </Link>
              )}
              <ul className="flex flex-col">
                <li className="text-base  px-4 py-2 font-bold hover:bg-slate-100 duration-100 transition-all cursor-pointer ease-in-out">
                  Home
                </li>
                <li className="text-base px-4 py-2 font-bold hover:bg-slate-100 duration-100 transition-all cursor-pointer ease-in-out">
                  Menu
                </li>
                <li className="text-base px-4 py-2 font-bold hover:bg-slate-100 duration-100 transition-all cursor-pointer ease-in-out">
                  About Us
                </li>
                <li className="text-base  px-4 py-2 font-bold hover:bg-slate-100 duration-100 transition-all cursor-pointer ease-in-out">
                  Service
                </li>
              </ul>
              <p onClick={logout} className="px-4 py-2 flex items-center gap-3 justify-center shadow-2xl cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-100 ease-in-out text-textColor ">
                Logout <MdLogout></MdLogout>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
