import React from 'react'
import "./feature.css"

const index = ({title, text}) => {
    return (
        <div className="feature">
            <div className="feature_title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="feature_text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default index
