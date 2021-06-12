import React from 'react'
import './Footer.css'

function Footer() {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    return (
    <>
        <footer className="footerPage">
            <div className="date">G/21</div>
            <h3 onClick={topFunction} className="toTop">BACK TO TOP</h3>
            <p className="rights">INSPIRED BY BEN MINGO <br /> ALL RIGHTS RESERVED</p>
             

        </footer>
    </>
    )
}

export default Footer
