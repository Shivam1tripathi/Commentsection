import React from 'react'

const Replysec = (props) => {
  return (
    <div className='Replysection'>
        <div className="Replyname">Raju</div>
        <div className='Replycontent'>{props.reply}</div>
    </div>
  )
}

export default Replysec