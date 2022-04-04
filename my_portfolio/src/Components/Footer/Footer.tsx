import React from 'react'
import './Footer.css'

function Footer() {

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    return (
        <div className="footerPage">
            <div className="signature">G/21</div>
            <h3 onClick={topFunction} className="toTop">BACK TO TOP</h3>
            <p className="rights">INSPIRED BY <a href="http://www.benmingo.com/">BEN MINGO</a><br /> ALL RIGHTS RESERVED</p>
            
        </div>
    )
}

export default Footer
