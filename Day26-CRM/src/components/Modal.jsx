import React from 'react'

function Modal() {
  return (
    <div className='modal'>
        <div className="box">
            <h2>Do you want to delete?</h2>
        </div>
        <div className="button">
            <button className='delete'>Delete</button>
            <button className='close'>Close</button>
        </div>
    </div>
  )
}

export default Modal