import React, {useState} from 'react'
import { request, setAuthHeader } from '../helpers/axios_helper';

   
    export const findUserService = () => {  
        // const list = [
        //     {"id": "01","firstname": "Salas", "lastname": "Seydo", "email": "salas@gmail", "role": "Manager"},
        //     {"id": "02","firstname": "Santosh", "lastname": "Pushkin", "email": "Santosh@gmail", "role": "Manager"}        
        //    ];

           //const data = "Value From User Service"
       
        //debugger;
         let results=[];
           request("GET", "/api/v1/management/get/all", {})
           .then(
                (response) => {
                       results = response.data; 
                       console.log("users from userService...."); 
                       console.log(results);          
                }).catch(
                  (error) => {
                    console.log("Users not able to retrive...")                                    
                }
            );
        

       return results;          
    };

    export const  registerUser = (user) => {        
        request(
            "POST",
            "/api/v1/auth/register",
            { 
                firstname: user.firstName,
                lastname: user.lastName,
                email: user.email,
                password: user.password,
                role: user.role

            }).then(
            (response) => {
                setAuthHeader(response.data.token);                
            }).catch(
            (error) => {
                setAuthHeader(null);                
            }
        );
    };
    
    
    