import React from 'react'
import {Bookmark} from "lucide-react";

const Card = () => {
  return (
   
    <div className="card">

        <div>
          <div className="top">
            <img src='https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&P=0&h=180'/>
            <button>Save <Bookmark size={14}/></button>
          </div>

          <div className="center">
              <h3>Amazon <span>5 days ago</span></h3>
              <h2>Senier UI/UX Designer</h2>

              <div className='tag'>
                <h4>Part Time</h4>
                <h4>Senier Level</h4>
              </div>
          </div>

        </div>

        <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>

            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card