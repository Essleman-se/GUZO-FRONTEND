import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../../service/UserService';
import {useApiList} from '../../service/ListUsersComponentService';


export const ListUsersComponent = () => {
  //const {registerUser, updateUser, deleteUser} = userService();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const apiUrl = '/api/v1/management/get/all';
  const { data, loading, error } = useApiList(apiUrl);

  const findAllUsers = () => {
    //     const apiUrl = '/api/v1/management/get/all';
    //     const { data, loading, error } = useApiList(apiUrl);


  };



  const deleteUserById = (userId) => {
    deleteUser(userId);
    navigate('/userlist');
  };

  return (
    <div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center">Error: {error.message}</p>
      ) : (
        <div>

          <div className="container">
            <h2 className="text-center"> Users List </h2>
            {/* <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link> */}
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th> User Id </th>
                  <th> User First Name </th>
                  <th> User Last Name </th>
                  <th> User Email Id </th>
                  <th> User Role </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.map(
                    user =>
                      <tr key={user.id}>
                        <td> {user.id} </td>
                        <td> {user.firstname} </td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <Link className="btn btn-info" to={`/edit-user/${user.id}`} >Update</Link>
                          <button className="btn btn-danger" onClick={() => deleteUserById(user.id)}
                            style={{ marginLeft: "10px" }}> Delete</button>

                        </td>
                        {/* <td><button onClick={props.data}>call function</button></td> */}
                      </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )

}




