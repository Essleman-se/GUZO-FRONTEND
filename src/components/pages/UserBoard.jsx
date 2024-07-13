import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../pages/userBoard.css';

export const UserBoard = () => {


    return (
    <div className="userboard">
      <h2>Here is list of users</h2>
      <div>
        <Link to="/userlist" className="btn btn-danger" style = {{marginLeft:"50px"}}> List All Users </Link>
        <button style = {{marginLeft:"10px"}} >Search User</button>
     </div>
     </div>
    )
}