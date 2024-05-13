import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAdmin } from '../store/slices/AdminSlice';

const DisplayAdmin = () => {
    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.admin
    })

    const DeleteAdmin = (id)=>{
        dispatch(deleteAdmin(id));
    }


  return (
    <div>
        {data.map((admin, id)=>{
            return (
                <div key={id} style={{display:"flex", padding:"20px", justifyContent:"space-between", cursor:"pointer"}}>
                   <h1 style={{fontSize:"13px"}} key={id}>{admin}</h1>
                   <button onClick={()=> DeleteAdmin(id)}>Delete</button>
                </div>
        )
        })}
    </div>
  )
}

export default DisplayAdmin