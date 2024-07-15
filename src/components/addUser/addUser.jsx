import React from 'react'
import "./addUser.css"

const addUser = () => {
  return (
    <div className='addUser'>
      <form action="">
        <input type="text" placeholder='Username' name='username'/>
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
            <img src="./avatar.png" alt="" />
            <span>Jane Doe</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  )
}

export default addUser
