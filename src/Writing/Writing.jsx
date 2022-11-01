import React, { useEffect } from "react";
import './Writing.scss';
import {gsap} from 'gsap'

const Wiriting = () =>{

   useEffect(()=>{

      const tl = gsap.timeline({repeat:0, defaults:{duration:2}})

       tl.fromTo('.wrapper',{opacity:0, x:'-30'}, {opacity:1, x:'0'})

   }, [])

   return(
    <div>
       <div className="wrapper">
          <div className="title">
            <h1>Here lies my blog</h1>
          </div>
           <div className="content">
            <p>...is what this page might say some day.</p>
           </div>
       </div>
    </div>
   )
}

export default Wiriting