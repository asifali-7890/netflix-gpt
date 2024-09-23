import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase.js"
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants.js';
import { toggleGPTSearch } from '../utils/gptSlice.js';
import lang from '../utils/languageConstants.js';
import { changeLanguage } from '../utils/configSlice.js';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showLanguage = useSelector((store) => (store.gpt.gptSlice));

  const user = useSelector(store => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => { navigate("/") })
      .catch((error) => { navigate("/error") })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // return () => unsubsribe();
  }, [])

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearch());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));

  }

  return (
    <div className=' justify-between flex-col md:flex-row flex z-10 absolute px-8 py-2 bg-gradient-to-b from-black w-full'>

      <img  
        className="mx-auto w-36 h-14 md:mx-0"
        src={LOGO}
        alt="" />

      {user && (<div className="flex p-2 justify-between" >
        {showLanguage && (<select onChange={handleLanguageChange} className='m-4 p-2 bg-gray-900 text-white'>
          {SUPPORTED_LANGUAGES.map(lang => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
        </select>)}
        <button onClick={handleGPTSearchClick} className='py-2 px-4 mx-4 my-4 bg-purple-800 text-white rounded-lg'>
          {showLanguage? 'Home Page ' : 'GPT Search'}
        </button>

        <img className="w-24 pt-3 hidden md:block" src={user?.photoURL} alt="userIcon" />
        <button className='font-bold text-white rounded-lg m-2 p-2  bg-red-600' onClick={handleSignout}>(Sign Out)</button>
      </div>)
      }
    </div>
  )
}

export default Header