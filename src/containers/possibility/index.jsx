import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import "./possibility.css"

const index = () => {
    return (
        <div className="possibility">
            <div className="left_pos">
                <img src={possibilityImage} alt="" />
            </div>
            <div className="right_pos">
                <p>Request Early Access to Get Started</p>
                <h4  className="text__bg">The possibilities are beyond your imagination</h4>
                <p className="right_pos_text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h6>Request Early Access to Get Started</h6>
            </div>
        </div>
    )
}

export default index
