import React, { useEffect } from "react";
import './Home.scss';
import {gsap} from 'gsap';



const Home = () => {


   // const titleWrap =()=>{

   //    gsap.from('.title', {duration:2, y:'20',opacity:0})
   //    gsap.to('.title', {duration:2, y:'-10',opacity:1})
   //    gsap.from('.titleH1', {duration:2, y:'20',opacity:0})
   //    gsap.to('.titleH1', {duration:2, y:'0.8',opacity:1})
   //    gsap.from('.nestedContent', {duration:2, y:'20',opacity:0})
   //    gsap.to('.nestedContent', {duration:2, y:'-3',opacity:1})
   //    gsap.from('.realLife', {duration:2, y:'20', opacity:0})
   //    gsap.to('.realLife', {duration:2, y:'-3', opacity:1})
   //    gsap.from('.navlink', {duration:2, y:'40', opacity:1})
   //    gsap.to('.navlink', {duration:2, y:'28', opacity:1})
   // }


 useEffect(()=>{

   const tl = gsap.timeline({repeat:0, delay:0.8, defaults:{duration:1}})

   tl.fromTo('.title', { y:'20',opacity:0}, {y:'-10',opacity:1})
   tl.fromTo('.titleH1', { y:'20',opacity:0}, {y:'20',opacity:1})
   tl.fromTo('.nestedContent', { y:'20',opacity:0}, {y:'-3',opacity:1})
   tl.fromTo('.realLife', { y:'20',opacity:0}, {y:'-3',opacity:1})
   tl.fromTo('.navlink', { y:'40',opacity:0}, {y:'28',opacity:1})
   // titleWrap()

 },[])  





   return (
      <div>
            
            <div className="homeContent" >
            <div className="title" >
            <p>Hi, I'm Vijay</p>
            <h1 className="titleH1">Designer. Product Person.</h1>
         </div>
         <div className="content">
            <p className="nestedContent">
               Multidisciplinary designer who hacks at, makes and occasionally breaks things.
               Product Design Director on the team behind <a href="aaa">vijaysandy.freelance.com</a>
               
            </p>
            <p className="realLife">Less moody in real life. ✌️</p>
             <div className="navlink">
               <a href="aaa">Learn more</a>
             </div>
         </div>
            </div>
        
      </div>
   )
}

export default Home