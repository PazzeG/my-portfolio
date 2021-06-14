import React from 'react'
import './Home.css'

function Home() {
    return (
        
            <div className="homePage">
                <div className="titleCont">
                    <h1 className="title">GUILLAUME</h1>
                </div>
                <div className="presentation">
                    <p className="firstPart">GUILLAUME PAZZÉ IS AN<br />ORLEANS BASED<br />CREATIVE DEVELOPPER,</p>
                    <p className="secondPart">HE EXPERIENCED<br />TEAMWORKS AND<br />AGILITY PROJECTS</p>
                    <div className="social">
                        <span><a href="mailto: guillaume.pazze@gmail.com" >EMAIL</a></span>
                        <span><a href="https://twitter.com/brotherwaterz" >TWITTER</a></span>
                        <span><a href="https://www.linkedin.com/in/guillaume-pazze/" >LINKEDIN</a></span>
                    </div>
                </div>
                <span className="scrollInv">SCROLL FOR MORE</span>

            </div>            
    )
}

export default Home
