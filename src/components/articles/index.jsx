import React from 'react'
import "./article.css"

const index = ({img_src,timestamp,text}) => {
    return (
        <div className="article">
            <div className="up">
            <img src={img_src} className="img" alt="" />
            </div>

            <div className="down">
                <div>
            <p className="timestamp">{timestamp}</p>
            <h3>{text}</h3>
                </div>
            <div className="more">
                Read Full Article
                </div>            
            </div>
        </div>
    )
}

export default index
