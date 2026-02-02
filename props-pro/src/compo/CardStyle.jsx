// CardStyle.jsx


import React from 'react'

const CardStyle = (props) => {
  return (
    <div className='p-5 flex justify-center'>
      <div className='h-75 w-100 overflow-hidden relative bg-white rounded-xl flex flex-col items-center'>
        
        <img
          src={props.img}
          alt="image"
          className='h-full w-full object-cover'
        />

        <p className='absolute bottom-4 text-4xl text-black font-bold'>
          {props.Name}
        </p>

      </div>
    </div>
  )
}

export default CardStyle
