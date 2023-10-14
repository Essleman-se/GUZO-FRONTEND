import * as React from 'react';
import { useState, useEffect } from "react";
import classNames from 'classnames';

import {registerUser} from '../../service/UserService';


export const Register = () => {

     const [firstName, setFirstName] = useState('')
     const [lastName, setLastName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [role, setRole] = useState('')


     const onSubmitRegister = (e) => {
            e.preventDefault();
            //debugger
               const user = {firstName, lastName, email, password, role};   
               if(user !== null && user !== "null"){     
                  registerUser(user)
               }else{
                    console.log("User is NULL");
               } 
      };


    return (
     <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
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
                                <button className = "btn btn-success" onClick = {(e) => onSubmitRegister(e)} >Submit </button>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
   )
}