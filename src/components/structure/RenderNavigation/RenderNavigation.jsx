import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../../auth/AuthWrapper";
import { nav } from "../navigation";
import './renderNavigation.css';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import {useState} from 'react';


export const RenderRoutes = () => {

        const { user } = AuthData();
        
        return (
             <Routes>
                    { nav.map((r, i) => {
                         
                         if (r.isPrivate && user.isAuthenticated) {
                              return <Route key={i} path={r.path} element={r.element}/>
                         } else if (!r.isPrivate) {
                              return <Route key={i} path={r.path} element={r.element}/>
                         } else return false
                    })}
             
             </Routes>
        )
   }
   
   export const RenderMenu = () => {
     const { user, logout } = AuthData()
     const [active, setActive] = useState('menu');      
     //Function to toggle menu bar 
     const showMenu = () => {
          setActive('menu activeMenu');
     } 
     //Function to remove menu bar 
     const removeMenu = () => {
            setActive('menu');
     }         
   
     const MenuItem = ({r}) => {
             return (
                  <div className="menuItem"><Link to={r.path} className="menuLink">{r.name}</Link></div>
             )
        }
        return (
          <header className="header flex">
               <div className="logoDiv">
                    <a href="#" className="logo">
                         <h1><MdOutlineTravelExplore className='icon' />Travel</h1>
                    </a>
               </div>
               {/* <div className="adjuster">
                    <p>Here GO</p>
               </div> */}
               <div className={active}>
                 <div className="menuList">
                    { nav.map((r, i) => {
     
                         if (!r.isPrivate && r.isMenu) {
                              return (
                                   <MenuItem key={i} r={r}/>
                              )
                         } else if (user.isAuthenticated && r.isMenu) {
                              return (
                                   <MenuItem key={i} r={r}/>
                              )
                         } else return false
                    } )}
     
                    { user.isAuthenticated ?
                    <div className="menuItem"><Link to={'#'} className="menuLink" onClick={logout}>LOGOUT</Link></div>
                    :
                    <>
                    <div className="menuItem"><Link to={'login'} className="menuLink">LOGIN</Link></div>
                    <div className="menuItem"><Link to={'register'} className="menuLink">REGISTER</Link></div>
                    </> }

                </div>
                    <div onClick={removeMenu} className="closeMenubar">
                      <AiFillCloseCircle className='icon'/>
                    </div>
              </div>
              <div onClick={showMenu} className="toggleMenubar">
                <TbGridDots className='icon'/>
              </div>
          </header>
        )
   }