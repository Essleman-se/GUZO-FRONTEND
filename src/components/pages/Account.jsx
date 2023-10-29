import { AuthData } from "../../auth/AuthWrapper"
import { request, setAuthHeader } from '../../helpers/axios_helper';
import { useState, useEffect } from "react";

export const Account = () => {

      const { user } = AuthData();
      const [result, setResult] = useState([]);         

      useEffect(() => {
          const getMessage = () => {
          request(
               "GET",  
               "/api/v1/auth/message",                      
               {}).then(
               (response) => {       
                    //userArr = response.data;              
                    setResult(response.data);                    
                    // console.log("From Use Effect in response block --");
                    // console.log(arr);
               }).catch(
               (error) => {
                   if (error.response.status === 401) {
                       setAuthHeader(null);
                   } else {
                    setResult({result: error.response.code})                     
                }
   
               }
           );
          }
           
        return getMessage();

      }, []);

      //debugger
     //  useEffect(() => {
     //      // console.log("From Use Effect --");
     //      // console.log(result);
     //  }, [result]);


     return (
     <div>
          <div className="page">
               <h2>Your Account</h2>
               <p>Username: {user.name}</p>
          </div>
          <div className="row justify-content-md-center">
          <div className="col-4">
               <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                         <h5 className="card-title">Backend response</h5>
                         <p className="card-text">Content:</p>
                         <ul>
                           {result.map((line) =>                                   
                                    <li key={line}>{line}</li>                                    
                                 )
                            }                              
                         </ul>
                    </div>
               </div>
          </div>
          </div>
     </div>
     )
}