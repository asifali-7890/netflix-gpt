import React, { useState, useRef } from 'react'
import Header from './Header.js'
import { checkValidateData } from '../utils/validate.js'
import { auth } from "../utils/firebase.js";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { BG_URL, USER } from '../utils/constants.js';


const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  }

  const handleButtonClick = () => {
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!IsSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: USER
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  }

  return (<>
    <div>
      <Header />
      <div className='absolute'>
        <img className='h-screen object-cover md:w-screen' src={BG_URL} alt="" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='bg-opacity-80 text-white w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0'>
        <h1 className='text-3xl py-4 font-bold'>{IsSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!IsSignInForm && <input ref={name} type="text" placeholder='Full Name' className='bg-gray-700 rounded-lg w-full p-2 m-2' />
        }
        <input ref={email} type="text" placeholder='Email Address' className='bg-gray-700 rounded-lg w-full p-2 m-2' />
        <input ref={password} type="text" placeholder='Password' className='bg-gray-700 rounded-lg w-full p-2 m-2' />
        <p className='text-red-500 font-bold text-lg py-2'>{errormessage}</p>
        <button onClick={handleButtonClick} className='cursor-pointer rounded-lg w-full p-4 m-2 bg-red-700'>{!IsSignInForm ? 'Sign Up' : 'Sign In'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{!IsSignInForm ? 'Already registered? Sign In Now' : 'New to Netflix? Signup Now'}</p>
      </form>
    </div>
  </>
  )
}

export default Login