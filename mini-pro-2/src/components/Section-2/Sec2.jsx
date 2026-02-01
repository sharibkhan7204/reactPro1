import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Sec2 = ({ users }) => {
  return (
    <div className="h-full flex overflow-hidden">
      <LeftSide />

      <div id='right' className="flex gap-10 overflow-x-auto pr-10">
        {users.map((user, index) => (
          <RightSide
            key={index}
            img={user.img}
            intro={user.intro}
            tag={user.tag}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  )
}

export default Sec2
