import React, { useEffect, useState } from "react"
import './Header.scss'
import { NavLink } from 'react-router-dom';
// import {gsap} from 'gsap'

const Header = () => {

   const [isCloseClick, setCloseClick] = useState(false);
   const [isHamMenu, setHamMenu] = useState(true);
   const [isWindowSize, setWindowSize] = useState(window.innerWidth)

   const detectSize = () =>{
      setWindowSize(window.innerWidth)
   }


  useEffect(()=>{
   window.addEventListener("resize", detectSize)

   if(isWindowSize >=774){
      closeMenu()
   }

  },[isWindowSize])

   const closeMenu = () => {
      setCloseClick(false)
      setHamMenu(true)


   }

   const showHamMenu =() =>{
      setCloseClick(true)
      setHamMenu(false)
     
   }


   return (
      <>
         <nav className="header-grid">
            <ul>
               <li> <NavLink exact activeClassName="active" to="/home" > Home</NavLink> </li>
               <li> <NavLink exact activeClassName="active" to="/about"> About</NavLink></li>
               <li>  <NavLink exact activeClassName="active" to="/work" >Work</NavLink></li>
               <li><NavLink exact activeClassName="active" to="/writing">Writing</NavLink> </li>
               <li className="contact">   <NavLink exact activeClassName="active" to="/contact">Contact</NavLink> </li>
            </ul>

         </nav>
         {isHamMenu ?   <div className="hamburger" onClick={showHamMenu}>
            <img src={require('../Assets/img/hamburger.png')} alt="hamburger" />
         </div> : null}
       

         {isCloseClick ?
            <div className="responseMenu" >
               <ul className="reponsive-navlinks">
                  <li onClick={closeMenu}> <NavLink exact activeClassName="active" to="/home" > Home</NavLink> </li>
                  <li onClick={closeMenu}> <NavLink exact activeClassName="active" to="/about"> About</NavLink></li>
                  <li onClick={closeMenu}>  <NavLink exact activeClassName="active" to="/work" >Work</NavLink></li>
                  <li onClick={closeMenu}><NavLink exact activeClassName="active" to="/writing">Writing</NavLink> </li>
                  <li onClick={closeMenu}>   <NavLink exact activeClassName="active" to="/contact">Contact</NavLink> </li>
               </ul>
               <div className="close-icon" onClick={closeMenu}>
                  <img src={require('../Assets/img/cancel.png')} alt="" />
               </div>
            </div> : null}


      </>
   )
}

export default Header