import React, { useEffect } from "react";
import './Contact.scss'
import {gsap} from 'gsap'

const Contact = () =>{


   useEffect(()=>{

      const tl = gsap.timeline({repeat:0, defaults:{duration:2}})

       tl.fromTo('.wraper',{opacity:0, y:20}, {opacity:1, y:'-5'})

   }, [])

   return(
    <>

       <div className="wraper">
          <div className="title">
            <h1>Let's talk.</h1>
          </div>
          <div className="content">
          <p>Get in touch via the form below, or by emailing <a href="mailto:vijaysathya454@gmail.com?subject=Conatct!">
          vijaysathya454@gmail.com</a></p>
          </div>

           <form >
               <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" name="" id="" className="formInput" placeholder="Enter your Name" />

               <label htmlFor="name"  className="form-label" >Email Address:</label>
                    
              <input type="text" name="" id=""   className="formInput"  placeholder="Enter your email address " />

              <label htmlFor="name"  className="form-label">Message:</label>
                  <textarea className="textArea" placeholder="Enter your message"></textarea>

                  <input type="submit" className="submit" value={'Submit'} />
             
           </form>
       </div>
    </>
   )
}

export default Contact