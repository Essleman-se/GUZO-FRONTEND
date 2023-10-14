import React, {useState, useEffect} from 'react'

import { findUserService } from '../../service/UserService';

export const ListUsersComponent = () => {    
    const [users, setUsers] = useState([]);    
   

    useEffect(() => {
        setUsers(findUserService());
    }, []);

 
    console.log("props from user list comp");
    console.log(users);
    

    return (
        <div className = "container">
            <h2 className = "text-center"> List Users </h2>
            {/* <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link> */}
            <table className="table table-bordered table-striped">
                <thead>
                    <th> User Id </th>
                    <th> User First Name </th>
                    <th> User Last Name </th>
                    <th> User Email Id </th>
                    <th> User Role </th>                    
                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}> 
                                <td> {user.id} </td>
                                <td> {user.firstname} </td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                {/* <td>
                                    <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                    
                                </td> */}
                                {/* <td><button onClick={props.data}>call function</button></td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )

}

