import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg';

const index = () => {
    return (
        <div className="footer">
            <h1 className="text__bg">Do you want to step in to the future before others</h1>
           <div className="access_btn ">
            <p>Request Early Access</p>
           </div>
           <div className="bottom">
               <div className="l1">
                   <img src={gpt3Logo} alt="" />
                   <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                   </p>
               </div>
               <div className="l2">
                   <ul>
                       <li><h3>Links</h3></li>
                       <li>Overons</li>
                       <li>Social Media</li>
                       <li>Counters</li>
                       <li>Contact</li>
                   </ul>
               </div>
               <div className="l3">
               <ul>
                       <li><h3>Company</h3></li>
                       <li>Terms &#38; Conditions</li>
                       <li>Privacy Policy</li>
                       <li>Contact</li>
                       
                   </ul>
               </div>
               <div className="l4">
               <ul>
                       <li><h3>Get in touch</h3></li>
                       <li>Crechterwoord K12 182 DK Alknjkcb</li>
                       <li>085-132567</li>
                       <li>info@payme.net</li>
                   </ul>
               </div>
           </div>
           <div className="end-line">
               <p>© 2021 GPT-3. All rights reserved.</p>
           </div>
        </div>
    )
}

export default index
