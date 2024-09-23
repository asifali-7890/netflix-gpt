import React from 'react'
import GPTSearchBAR from './GPTSearchBAR.js'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constants.js';

const GPTSearch = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img className='h-screen object-cover w-screen' src={BG_URL} alt="" />
            </div>
            <div className=''>
                <GPTSearchBAR />
                <GPTMovieSuggestion />
            </div>
        </>
    )
}

export default GPTSearch