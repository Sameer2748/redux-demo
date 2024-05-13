import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/slices/Userslice';

const DisplayUser = () => {
    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.users;
    })

    const DeleteUser = (id)=>{
        dispatch(removeUser(id))
    }

  return (
    <div>
        {data.map((user, id)=>{
            return (
                <div key={id} style={{display:"flex", padding:"20px", justifyContent:"space-between", cursor:"pointer"}}>
                   <h1 style={{fontSize:"13px"}} key={id}>{user}</h1>
                   <button onClick={()=> DeleteUser(id)}>Delete</button>
                </div>
        )
        })}
    </div>
  )
}

export default DisplayUser