import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux';
import openai from '../utils/openai';

const GPTSearchBAR = () => {
    const searchText = useRef('');

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);

    }

    const langkey = useSelector(store => store.config.lang);
    return (
        <div className='pt-[55%] md:p-[10%] flex justify-center '>
            <form onSubmit={(e) => (e.preventDefault())} className=' bg-black w-full md:w-1/2 grid-cols-12 grid '>
                <input
                    type="text"
                    ref={searchText}
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[langkey].gptSearchPlaceHolder}
                />
                <button onClick={handleGptSearchClick} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
                    {lang[langkey].search}
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBAR