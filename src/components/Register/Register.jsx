import * as React from 'react';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './register.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {registerUser, updateUser} from '../../service/UserService';
import { request, setAuthHeader } from '../../helpers/axios_helper';


const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';


export const Register = () => { 
    
    //const {registerUser, updateUser, deleteUser, responseResult} = UserService();
    

    
    const { id } = useParams();
    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [firstName, setFirstName] = useState('')
    const [validName, setValidName] = useState(false);
    const [fNameFocus, setfNameFocus] = useState(false);

    const [lastName, setLastName] = useState('')
    const [validLname, setValidLname] = useState(false);
    const [lNameFocus, setlNameFocus] = useState(false);

    const [email, setEmail] = useState('')

    const [role, setRole] = useState('')

    const [password, setPassword] = useState('')
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(NAME_REGEX.test(firstName));
        setValidLname(NAME_REGEX.test(lastName));
    }, [firstName, lastName])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, email, password, role, matchPwd])

    const registerOrUpdateUser = async(e) => {
        e.preventDefault();        
        
        
        // if button enabled with JS hack
        const v1 = NAME_REGEX.test(firstName);
        const v2 = PWD_REGEX.test(password);
        let response = {};
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
          
            const user = { firstName, lastName, email, password, role };  
            
            if (user !== null && user !== "null") {
                if (id) {
                    updateUser(id, user);
                    navigate('/userlist');
                } else {
                    debugger                                      
                    response = await registerUser(user);    
                    console.log("Here is response from Register Component"); 
                    console.log(response);
                    console.log(response.code);                
                    //navigate('/login');
                    if(response.response === undefined){                        

                        setSuccess(true);

                        setFirstName('');
                        setLastName('');
                        setEmail('');                        
                        setPassword('');
                        setMatchPwd('');
                        setRole('');
                    }
                    if(response.response !== undefined){  
                        if (response.response?.status === 409) {
                            setErrMsg('Username Taken');
                        } else {
                            setErrMsg('Registration Failed')
                        }
                        errRef.current.focus();
                    }
                    

                }
            }
            


    }

    return (
        <div className='reg'>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                    <h1>Register</h1>
                    <form onSubmit={registerOrUpdateUser}>
                        <label htmlFor="firstName">
                            First Name:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !firstName ? "hide" : "invalid"} />
                        </label>
                        <input className='input'
                            type="text"
                            id="firstName"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setfNameFocus(true)}
                            onBlur={() => setfNameFocus(false)}
                        />
                        <p id="uidnote" className={fNameFocus && firstName && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        <label htmlFor="lastName">
                            Last Name:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !lastName ? "hide" : "invalid"} />
                        </label>
                        <input className='input'
                            type="text"
                            id="lastName"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            required
                            aria-invalid={validLname ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setlNameFocus(true)}
                            onBlur={() => setlNameFocus(false)}
                        />
                        <p id="uidnote" className={lNameFocus && lastName && !validLname ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <label htmlFor="email">
                            Email:
                        </label>
                        <input className='input'
                            type="text"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
                        </label>
                        <input className='input'
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input className='input'
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <label htmlFor="role">
                            Role:
                        </label>
                        <input className='input'
                            type="text"
                            id="role"
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                            required
                        />

                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </div>
    )
}