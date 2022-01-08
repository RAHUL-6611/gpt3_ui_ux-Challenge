import React from 'react'
import { google,
    slack,
    atlassian,
    dropbox,
    shopify} from "./imports"
import "./brands.css"    

const index = () => {
    return (
        <div className="brands">
            <img src={google} alt="" />
            <img src={slack} alt="" />
            <img src={dropbox} alt="" />
            <img src={atlassian} alt="" />
            <img src={shopify} alt="" />
            
        </div>
    )
}

export default index
