import { createContext, useContext, useState } from "react"
import { RenderHeader } from "../components/structure/Header";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation/RenderNavigation";
import { request, setAuthHeader } from '../helpers/axios_helper';
import {Main } from "../components/Main/Main"


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {

     const [ user, setUser ] = useState({name: "", isAuthenticated: false});
     
     const login = (email, password) => {
          //debugger
          // console.log("password and email from authwrapper");
          // console.log(email);
          // console.log(password);

          request(
              "POST",
              "/api/v1/auth/authenticate",
              {
                  email: email,
                  password: password
              }).then(
              (response) => {                 
                  setAuthHeader(response.data.access_token);      
               //    console.log("Token Value at authentication .."); 
               //    console.log(response.data.access_token)
                  setUser({name: email, isAuthenticated: true});                  
              }).catch(
              (error) => {
                  setAuthHeader(null);                 
              }
          );
          
          
     }
     const logout = () => {

          setUser({...user, isAuthenticated: false})
     }
     return (            
               <AuthContext.Provider value={{user, login, logout}}>
                    <>                        
                         <RenderMenu />
                         <Main />
                         <RenderRoutes />                        
                    </>                    
               </AuthContext.Provider>               
          
     )

}