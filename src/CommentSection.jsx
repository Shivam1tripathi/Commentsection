import React, { useState } from 'react'
import Comment from './Comment'

const CommentSection = () => {
  const [allcomment,setallcomment]=useState([])
  const [comment,setcomment]=useState("")
  return (
    <div className='container'>
        <div className="top">
            <h2>Comment Section</h2>
        </div>
        <main >
          {
            allcomment.map((e)=>{
              return <Comment comment={e.comment} replys={e.replys}/>
            })
          }
        </main>
        <div className='inputcont'>
        <input type="text" value={comment} placeholder='Comment here...' onChange={(e)=>setcomment(e.target.value)} />
        <button className='Add' onClick={(e)=>{
          if(comment!==""){
          setallcomment([...allcomment,{"comment":comment,"replys":[]}])
          }
          setcomment("")
          }}>Add</button>
        </div>
    </div>
  )
}

export default CommentSection