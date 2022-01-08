import React from 'react'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import {Article} from '../../components'

const index = () => {
    return (
        <div className="blog">
            <h1 className="text__bg">A lot is happening, We are   blogging about it.</h1>
            <div className="blog_posts">
                <div className="left">
                        <Article img_src={blog01} timestamp="Sep 26, 2021" text="A lot is happening" />
                </div>
                <div className="right">
                        <Article img_src={blog02} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" timestamp="Sep 26, 2021" />
                        <Article img_src={blog03} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" timestamp="Sep 26, 2021"/>
                        <Article img_src={blog04} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" timestamp="Sep 26, 2021"/>
                        <Article img_src={blog05} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" timestamp="Sep 26, 2021"/>
                </div>
            </div> 
            
        </div>
    )
}

export default index
