import * as React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { registerUser, updateUser} from '../../service/UserService';
import { request } from '../../helpers/axios_helper';
import './register.css';
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
           <div className = "regcontainer">              
                <div className = "row">
                {
                     title()
                }
                    <div className = "card col-md-6 offset-md-3 offset-md-3"> 
                        <div className = "card-body">
                          <form>                       
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name="firstName" className="inputfiled" placeholder="Enter First Name" value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}/>
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="lastName" className="inputfiled" placeholder="Enter Last Name" value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}/>
                            </Form.Group>
 
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" className="inputfiled" placeholder="Enter Email" value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" className="inputfiled" placeholder="Enter Password" value = {password}
                                        onChange = {(e) => setPassword(e.target.value)} />
                            </Form.Group>
 
                            <Form.Group className="mb-3">
                                <Form.Label>Role</Form.Label>
                                <Form.Control type="text" name="role" className="inputfiled" placeholder="Enter Role" value = {role}
                                        onChange = {(e) => setRole(e.target.value)}/>
                            </Form.Group>
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