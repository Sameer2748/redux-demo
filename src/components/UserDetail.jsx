import DeleteAllUsers from './DeleteAllUsers'
import styled from 'styled-components'
import {fakeUserData} from "../api/index"
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/Userslice'
import DisplayUser from './DisplayUser'
import { addAdmin } from '../store/slices/AdminSlice'
import DisplayAdmin from './DisplayAdmin'

const UserDetail = () => {

  const dispatch = useDispatch();

  const addNewUser = (payload)=>{
    dispatch(addUser(payload))
  }

  const addnewAdmin = (payload)=>{
    dispatch(addAdmin(payload))
  }
  return (
    <Wrapper>
    <div className="content">
      <div>

        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={()=> addNewUser(fakeUserData())}>Add New Users</button>
        </div>

        <ul>
          <DisplayUser/>
        </ul>
        <hr />
        <DeleteAllUsers  type="Delete user"/>
      </div>

      <div>
        <div className="admin-table">
          <div className="admin-subtitle">List of Admin Details</div>
          <button className="btn add-btn" onClick={()=> addnewAdmin("Sameer")}>Add New Admin</button>
        </div>
        <ul>
          <DisplayAdmin/>
        </ul>
        <hr />
        <DeleteAllUsers type="Delete Admin"/>
      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetail