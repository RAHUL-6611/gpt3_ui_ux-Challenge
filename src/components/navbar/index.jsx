import React,{useState, useEffect} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    return (
        <div className="navbar">
            <div className="leftside_nav">
                <div className="logo">
                    <h3>GPT-3</h3>
                </div>
                <ul className="add-ups-horizontal">
                        <li>Home</li>
                        <li>What Is GPT3?</li>
                        <li>Open AI</li>
                        <li>Case Studies</li>
                        <li>Library</li>
                </ul>
            </div>
            <div className="rightside">
                <div className="register_horizontal">
                <div className="btn1">Sign In</div>
                <div className="btn2">Sign up</div>
                </div>
            
            <div className="add-ups-sidebar">
                {isSidebarOpen ?
                 <RiCloseLine color="#fff" size={32} onClick={()=> setIsSidebarOpen(!isSidebarOpen)}/> 
                 : <RiMenu3Line color="#fff" size={32} onClick={()=> setIsSidebarOpen(!isSidebarOpen)}/>}
                { isSidebarOpen && (
                <>
                <ul className="add-ups-vertical scale-up-tr">
                        <li>Home</li>
                        <li>What Is GPT3?</li>
                        <li>Open AI</li>
                        <li>Case Studies</li>
                        <li>Library</li>

                        <div className="register_vertical">
                         <div className="btn1">Sign in</div>
                          <div className="btn2">Sign up</div>
                        </div>
                </ul>
                </>
            )
                }
            </div>
            </div>
        </div>
    )
}

export default Navbar
