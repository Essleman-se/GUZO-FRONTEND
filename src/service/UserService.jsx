import { useState, useEffect } from 'react'
import { request, setAuthHeader } from '../helpers/axios_helper';



export function useApiList(apiUrl) {
    // Define state for your list of values
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Inside the effect, make an Axios API call     
        request(
            "GET", apiUrl,
            {}).then(
                (response) => {
                    // Update the state with the fetched data
                    setData(response.data);
                    setLoading(false);
                }).catch(
                    (err) => {
                        setError(err);
                        setLoading(false);
                    }
                );
    }, [apiUrl]);

    return { data, loading, error };
}



export async function registerUser(user){

    //const[responseResult, setResponseResult] = useState({});
    let responseResult = {};
     await request(
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
                debugger;                
                responseResult = response;
                console.log("Here is Response Result");
                console.log(responseResult);
                setAuthHeader(response.data.token);
            }).catch(
                (error) => {
                    debugger;
                    responseResult = error;
                    console.log("Here is error userservice component");
                    console.log(responseResult);
                    setAuthHeader(null);

                }
            );

            console.log("Again -----> Here is Response Result");
            console.log(responseResult);


            return responseResult;

};

export const updateUser = (userId, user) => {

    request(
        "PUT",
        "/api/v1/management/update",
        {
            id: userId,
            firstname: user.firstName,
            lastname: user.lastName,
            email: user.email,
            password: user.password,
            role: user.role

        }).then(
            (response) => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });

};

export const deleteUser = (userId) => {
    console.log("User id to delete from user service ---->" + userId);
    console.log(userId);
    request(
        "DELETE",
        "/api/v1/management/" + userId,
        {
        }).then(
            (response) => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });

};







