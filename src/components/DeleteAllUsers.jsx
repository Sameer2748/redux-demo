import { deleteAdmins } from '../store/slices/AdminSlice'
import { clearAllUser } from '../store/slices/Userslice'
import { useDispatch } from 'react-redux'


const DeleteAllUsers = ({type}) => {
  const dispatch = useDispatch()

  const deleteUsers = () => {
    dispatch(clearAllUser())
  }
  const deleteAllAdmin = ()=>{
    dispatch(deleteAdmins())
  }
  return (
    <>
      {type === "Delete Admin" ?   
         <button style={{backgroundColor:"black", width:"100px", height:"40px", color:"white", cursor:"pointer"}} onClick={()=> deleteAllAdmin()}>{type}</button>
         :   
         <button style={{backgroundColor:"black", width:"100px", height:"40px", color:"white", cursor:"pointer"}} onClick={()=> deleteUsers()}>{type}</button>
      }
    </>
  )
}

export default DeleteAllUsers