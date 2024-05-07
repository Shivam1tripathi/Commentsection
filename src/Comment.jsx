import React, { useState } from 'react'
import Replysec from './Replysec'

const Comment = (props) => {
  const[replyshow,setreplyshow]=useState(false)
  const[onereply,setonereply]=useState("")
const [replyinput,setreplyinput]=useState(false)

  function replyhandeler(){
    if(replyshow===true){
      return setreplyshow(false);
    }
    return setreplyshow(true);
  }

  function rsp(){
    if(replyinput===true){
      return setreplyinput(false)
    }
      return setreplyinput(true)
  }
  return (
    <div className='comment'>
        <div className='Commetername'>Shivam</div>
        <div className='Commentcontent'>{props.comment}</div>
      
          
        
        <div className='rp'>
        {
            !replyinput?
            <button className='reply' onClick={(e)=>{rsp()}}>Reply</button>
            :
            <div className='reply-input'>
              
            <input type="text" value={onereply} placeholder='Reply here...' onChange={(e)=>setonereply(e.target.value)} />
            <button className='Add' onClick={
              (e)=>{
                if(onereply!==""){
              props.replys.push(onereply)
                }
              setonereply("")
              rsp()
              
            }
            } >Add</button>
            
            </div>
          }
        {
          props.replys.length>0?
        (
          !replyshow?
          <button className='reply' onClick={(e)=>replyhandeler()}>Show reply</button>
          :
          <button className='reply' onClick={(e)=>replyhandeler()}>Hide reply</button>
        ):
        ""
      }
        </div>
        {
        replyshow?<div className='repl'>
        {props.replys.map((e)=>{return <Replysec reply={e}/>})}
        </div>:""
      }
    </div>
  )
}

export default Comment