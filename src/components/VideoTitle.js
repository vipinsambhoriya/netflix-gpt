import React from 'react';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-50 text-black text-xl p-3 px-12 rounded-lg  m-2  hover:bg-opacity-80'>▶Play</button>
        <button  className='bg-gray-500 text-white text-xl p-3 px-12 rounded-lg opacity-50  '>ℹMore Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
