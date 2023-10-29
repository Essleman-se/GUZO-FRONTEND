import * as React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from 'react-router-dom';
import { registerUser, updateUser} from '../../service/UserService';
import { request } from '../../helpers/axios_helper';

export const Register = () => {

     const [firstName, setFirstName] = useState('')
     const [lastName, setLastName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [role, setRole] = useState('')
     const {id} = useParams();
     const navigate = useNavigate();


     const registerOrUpdateUser = (e) => {
            e.preventDefault();
            //debugger
               const user = {firstName, lastName, email, password, role};   
               if(user !== null && user !== "null"){ 
                if(id){
                    updateUser(id, user);
                    navigate('/userlist');
                }else {   
                  registerUser(user);
                  navigate('/login');                  
               }
            }
      };

      useEffect(() => {
        request("GET", "/api/v1/management/get/"+id, {})
        .then(
                (response) => {                  
                    setFirstName(response.data.firstname);  
                    setLastName(response.data.lastname);
                    setEmail(response.data.email);
                    setRole(response.data.role);       
                }).catch(
                (error) => {
                    console.log(error)                                    
                }
            );
      }, [id]);

    const title = () => {
        if(id){
            return  <h3 className = "text-center">Update User</h3>
        }else{
            return <h3 className = "text-center">Add User</h3>
        }
    }

    return (
     <div>
           <br /><br />
           <div className = "container">              
                <div className = "row">
                {
                     title()
                }
                    <div className = "card col-md-6 offset-md-3 offset-md-3"> 
                        <div className = "card-body">
                            <form>
                            <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> password :</label>
                                    <input
                                        type = "password"
                                        placeholder = "Enter Password"
                                        name = "password"
                                        className = "form-control"
                                        value = {password}
                                        onChange = {(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> role :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Role"
                                        name = "role"
                                        className = "form-control"
                                        value = {role}
                                        onChange = {(e) => setRole(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) => registerOrUpdateUser(e)} >Submit </button>
                                <Link to="/userlist" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
   )

}