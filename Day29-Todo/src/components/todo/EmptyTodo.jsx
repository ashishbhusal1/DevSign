import React from 'react'
import EmptyImage from '../../images/empty-task.svg'

function EmptyTodo() {

  return (
    <div className="empty-task">
            <img src={EmptyImage} />
            <p>You don't have task to do, you can add tasks here.</p>
        </div>
  )
}

export default EmptyTodo