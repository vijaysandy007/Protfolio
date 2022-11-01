import React, { useEffect } from "react"
import './About.scss';
import {gsap} from 'gsap';


const About = () => {   

   useEffect(()=>{
      var tl = gsap.timeline({repeat:0, defaults:{duration:2} })
      tl.fromTo('.wrapper', {opacity:0, y:'40'} ,{opacity:1, y:'-2'})
    
   }, [])

   return (
      <div>
          
          <div className="wrapper">

          
         <div className="title">
            <h1>I build value by Design & Development.</h1>
         </div>

         <div className="nested-content">
            <p>I’m Vijay sandy, but you can just call me Vijay.</p>
            <p>Originally hailing from the India  🇮🇳  for the last decade or so I’ve been honing my skills in Design <br /> & Developement, 
               production and management roles building products for the web development</p>

               <p>I strive to create elegant solutions that surprise and delight users, while keeping complex technical 
                  dependencies in mind for implementation, scalability and developer sanity.</p>

                  <p>I’ve worked with 
                  small, agile teams on skunkworks projects and larger development teams with product lifecycles spanning multiple years.</p>

             <p>Depending on the team, resources and deliverables I’ve worn many hats over the years - holding 
               titles like Product Designer, UX Designer, Front-end Developer, Backend Developer, Growth Lead, 
              </p>

               <p>I also occasionally give talks on design and  development.</p>
               <p>Have an interesting project? <a href="aa">Let's talk.</a></p>
         </div>

         </div>


      </div>
   )
}

export default About