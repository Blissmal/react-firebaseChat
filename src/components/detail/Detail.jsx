import React from 'react'
import "./detail.css"
import { auth } from '../../lib/firebase'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://t3.ftcdn.net/jpg/00/96/00/80/360_F_96008063_XJOGkGwi5v4BKJ0iZX2qAjTpwE3Tw2SJ.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className='icon'/>
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://t3.ftcdn.net/jpg/00/96/00/80/360_F_96008063_XJOGkGwi5v4BKJ0iZX2qAjTpwE3Tw2SJ.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className='icon'/>
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://t3.ftcdn.net/jpg/00/96/00/80/360_F_96008063_XJOGkGwi5v4BKJ0iZX2qAjTpwE3Tw2SJ.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className='icon'/>
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://t3.ftcdn.net/jpg/00/96/00/80/360_F_96008063_XJOGkGwi5v4BKJ0iZX2qAjTpwE3Tw2SJ.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className='icon'/>
          </div>
        </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" className='icon'/>
          </div>
        </div>
        <button>Block User</button>
        <button className='logout' onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail
