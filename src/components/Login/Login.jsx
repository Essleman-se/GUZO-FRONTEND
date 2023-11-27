import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper"
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import './login.css'

export const Login = () => {

     const navigate = useNavigate();
     const { login } = AuthData();
     const [ formData, setFormData ] = useReducer((formData, newItem) => { 
          return ( {...formData, ...newItem})}, {userName: "", password: ""})

     const [ errorMessage, setErrorMessage ] = useState(null)
     
     const doLogin = async () => {

          try {
               
               await login(formData.userName, formData.password) 
               navigate("/account")

          } catch (error) {
               setErrorMessage(error)               
          }
          
     }

     return (
          <div className="page">
            <div className="div-bg"></div>               
               <div className="inputs">
                  <div className="input-group">                     
                    <div className="input"> 
                         <div className="icon-group">                        
                           <FaUser className="icon"/>   
                         </div>                       
                         <input placeholder="Username" onfocus="addBoxShadow('username')" onblur="removeBoxShadow('username')" 
                               value={formData.userName} onChange={(e) => setFormData({userName: e.target.value}) } type="text"/>
                    </div>
                    <div className="input">
                         <div className="icon-group">
                          <FaLock className="icon"/>
                         </div> 
                         <input placeholder="Password" onfocus="addBoxShadow('password')" onblur="removeBoxShadow('password')"
                                   value={formData.password} onChange={(e) => setFormData({password: e.target.value}) } type="password"/>
                    </div>
                    <div className="button">
                         <button onClick={doLogin}>Log in</button>
                    </div>
                    {errorMessage ?
                    <div className="error">{errorMessage}</div>
                    : null }
                </div>
               </div>            
          </div>
     )
}