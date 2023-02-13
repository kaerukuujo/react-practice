import React from "react"

export default function Navbar(){
    return (
        <nav className='navbar'>
            <div className="navLeft">
                <img src="../images/React-icon.png" alt="none" width='50px' />
                <h2 className='logoText'>ReactFacts</h2>
            </div>
            <div className="navRight">
                <h2 className="courseText">React Course - Project 1</h2>
            </div>
        </nav>
    )
}

