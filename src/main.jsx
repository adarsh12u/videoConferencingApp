import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom'
 const Main = () => {
  const navigate = useNavigate();
  const[roomId , setroomId] = useState('')
  

const  handleformsubmit = (e) =>{
  e.preventDefault();
  navigate(`/room/${roomId}`)
}
     
  return (
    
    <div  className='main' >
        <form onSubmit={(e)=>handleformsubmit(e)}>
       <div className='inner' >
         <h2  >YooChat </h2>
         <div className='div'>
          <input id='css' onChange={(e) =>setroomId(e.target.value)} value={roomId} className='input'  type='text' placeholder='Enter room id' />
          <button id='css' type='submit' className='button' >Enter</button>
       </div>
       </div>
           
       </form>

    </div>
   
  )
}
export default Main

 