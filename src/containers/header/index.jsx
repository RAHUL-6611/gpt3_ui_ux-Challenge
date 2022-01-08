import React from 'react'
import people from '../../assets/people.png'
import ai from "../../assets/ai.png"
import "./header.css"

const Header = () => {
    return (
        <div className="header">
        <div className="left">
            <div className="title">

            <h1 className="text__bg">
            Let&apos;s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of
            </p>

            <div className="form">
                <input type="text" placeholder="Your Email Address"/>
                <button className="btn">Get Started</button>
            </div>
            <div className="subscribers">
                <img src={people} alt="" />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
            </div>            
            </div>
        <div className="right">
            <img src={ai} alt="" className="svg"/>
            </div>            
        </div>
    )
}

export default Header
