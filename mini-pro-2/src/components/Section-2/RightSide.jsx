import React from 'react'

const RightSide = ({ img, intro, tag, index }) => {
  return (
    <div  className="w-85 shrink-0">
      <div className="h-full bg-amber-200 rounded-3xl overflow-hidden relative">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 p-8 flex flex-col justify-between text-white bg-black/40">
          <div className="h-14 w-14 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold">
            {index}
          </div> 

          <div>
            <p className="text-lg font-semibold mb-6">
              {intro}
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 px-6 py-2 rounded-full font-semibold">
                {tag}
              </button>

              <button className="bg-blue-600 px-4 py-2 rounded-full">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide
  