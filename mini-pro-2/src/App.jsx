import React from 'react'
import Sec1 from './components/Section-1/Sec1'
import Sec2 from './components/Section-2/Sec2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop',
      intro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ad totam nam dolorem optio vero.',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1678227547309-f25998d4fc86?w=500&auto=format&fit=crop&q=60',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas porro officia non impedit.',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1678227547309-f25998d4fc86?w=500&auto=format&fit=crop&q=60',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas porro officia non impedit.',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1678227547309-f25998d4fc86?w=500&auto=format&fit=crop&q=60',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas porro officia non impedit.',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quam perferendis!',
      tag: 'Underbanked'
    }
  ]

  return (
    <div className="h-screen flex flex-col">
      <div className="h-[12%]">
        <Sec1 />
      </div>

      <div className="h-[88%]">
        <Sec2 users={users} />
      </div>
    </div>
  )
}

export default App
