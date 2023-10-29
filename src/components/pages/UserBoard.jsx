import React from "react";
import { Link, useNavigate } from 'react-router-dom';

export const UserBoard = () => {


    return (
    <div>
        <Link to="/userlist" className="btn btn-danger" style = {{marginLeft:"50px"}}> List All Users </Link>
        <button style = {{marginLeft:"10px"}} >Search User</button>
     </div>
    )
}