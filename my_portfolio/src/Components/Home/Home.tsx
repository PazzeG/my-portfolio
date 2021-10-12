import React from 'react'
import './Home.css'

function Home() {
    return (
        
            <div className="homePage">
                <div className="titleCont">
                    <h1 className="title">GUILLAUME</h1>
                </div>
                <div className="presentation">
                    <div className="misc">
                        <p className="firstPart">GUILLAUME PAZZÉ IS AN<br />FRENCH BASED<br />FRONT DEVELOPER</p>
                        <p className="secondPart">HE EXPERIENCED<br />TEAMWORKS AND<br />AGILITY PROJECTS</p>
                    </div>
                    <div className="social">
                        <span><a href="mailto: guillaume.pazze@gmail.com" >email</a></span>
                        <span><a href="https://twitter.com/brotherwaterz" >twitter</a></span>
                        <span><a href="https://www.linkedin.com/in/guillaume-pazze/" >linkedin</a></span>
                        <span><a href="https://github.com/PazzeG" >github</a></span>
                    </div>
                </div>
                <span className="scrollInv">SCROLL FOR MORE</span>

            </div>            
    )
}

export default Home
