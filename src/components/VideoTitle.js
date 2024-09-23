import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] pt-24 px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className='text-lg py-6 w-1/3 hidden md:inline-block'>{overview}</p>
      <div className="my-4 md:m-0">
        <button className='py-1 md:py-4 px-8 md:px-12 py-4 bg-white text-black  px-12 text-3xl rounded-lg hover:bg-opacity-80'>
         Play
        </button>
        <button className='hidden md:inline-block ml-4 p-4 text-white bg-gray-500 px-12 text-xl bg-opacity-50 rounded-lg'>
          More Info
        </button>
      </div>
    </div>
  ) 
}

export default VideoTitle