import React, { useEffect } from "react";
import './Work.scss';
import { gsap } from 'gsap'

const Work = () => {

   useEffect(() => {

      const tl = gsap.timeline({ repeat: 0, defaults: { duration: 2 } });


      tl.fromTo('.title-wrapper', { opacity: 0, y: '18' }, { opacity: 1, y: '-4' })
      gsap.fromTo('.section-grid', { duration: 2, opacity: 0, y: '20' }, { opacity: 1, y: '-4' })

   }, [])

   return (
      <div>

         <div className="title-wrapper">
            <h1>From e-commerce platforms to virtual worlds.</h1>
            <p>Mostly a trip down memory lane. To be expanded one day.</p>
         </div>
         <div className="section-grid">
            <div className="section-1">
              <div className="nestedSection">
                <div className="nestedSection1">
                  <div className="imageClass">
                     <img src={require('../Assets/img/AngularPng.png')} alt="images" width="80"/>
                     <div className="content">
                     <p className="titleContent">Angular</p>
                      <p>Design and Development</p>
                     </div>
                   

                  </div>

                </div>

                <div className="nestedSection2">
                  <div className="imageRightClass">
                     <img src="https://uploads-ssl.webflow.com/591e9525f13786217f2e347e/5b3a377bc0be087a91158b9c_Building%20-%20Haiku%20thumbnail.png" alt="" />
                  </div>
                  
                  </div>
              </div>
               
            </div>
            <div className="section-2">

            <div className="nestedSection">
                <div className="nestedSection1">
                  <div className="imageClass">
                     <img src={require('../Assets/img/python.png')} alt="image1" width="80"/>
                     <div className="content">
                     <p className="titleContent">Python</p>
                      <p>Artificial Intelegance for Hospital Management</p>
                     </div>
                   

                  </div>

                </div>

                <div className="nestedSection2">
                  <div className="imageRightClass">
                     <img src={require('../Assets/img/artificial.png')} alt="image3" className="aritifiial" />
                  </div>
                  
                  </div>
              </div>

            </div>
            <div className="section-3">
            <div className="nestedSection">
                <div className="nestedSection1">
                  <div className="imageClass">
                     <img src={require('../Assets/img/nodejs.png')} alt="image4" width="200px"/>
                     <div className="content">
                     <p className="titleContent">NodeJs</p>
                      <p>Socila Media Cloning</p>
                     </div>
                   

                  </div>

                </div>

                <div className="nestedSection2">
                  <div className="imageRightClass">
                     <img src={require('../Assets/img/backend.png')} alt="image5" />
                  </div>
                  
                  </div>
              </div>
            </div>
            <div className="section-4">
            <div className="nestedSection">
                <div className="nestedSection1">
                  <div className="imageClass">
                     <img src={require('../Assets/img/reactjs.png')} alt="image6" width="80"/>
                     <div className="content">
                     <p className="titleContent">ReactJs</p>
                      <p>Design and Development</p>
                     </div>
                   

                  </div>

                </div>

                <div className="nestedSection2">
                  <div className="imageRightClass">
                     <img src={require('../Assets/img/reactjsBanner.png')} alt="image7" />
                  </div>
                  
                  </div>
              </div>
            </div>
            <div className="section-5">
            <div className="nestedSection">
                <div className="nestedSection1">
                  <div className="imageClass">
                     <img src={require('../Assets/img/vuejs.png')} alt="image8" width="80"/>
                     <div className="content">
                     <p className="titleContent">Vue.js</p>
                      <p>Design and Development</p>
                     </div>
                   

                  </div>

                </div>

                <div className="nestedSection2">
                  <div className="imageRightClass">
                     <img src={require('../Assets/img/vuejsBanner.png')} alt="image10" />
                  </div>
                  
                  </div>
              </div>
            </div>
            <div className="section-6">
            <div className="nestedSection">
                <div className="nestedSection1">
                  <div className="imageClass">
                     <img src={require('../Assets/img/metamask.png')} alt="image11" width="80"/>
                     <div className="content">
                     <p className="titleContent">Web3 Transcation</p>
                      <p>Metamask Integration</p>
                     </div>
                   

                  </div>

                </div>

                <div className="nestedSection2">
                  <div className="imageRightClass">
                     <img src={require('../Assets/img/blockchain.png')} alt="image12" />
                  </div>
                  
                  </div>
              </div>
            </div>
          
         </div>
      </div>
   )
}

export default Work