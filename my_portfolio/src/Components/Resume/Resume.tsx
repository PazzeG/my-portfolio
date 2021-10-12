import React from 'react'
import './Resume.css'


function Resume() {
    return (
        <div className="resumePage">
            <div className="period">
                <span className="early">(2020&2021)</span>
                <span className="late">(2018&2019)</span>
            </div>
            <div className="activity">
                <span className="workFor"><a href="https://www.louisgrillonperformance.com">lgperformance</a></span>
                <span className="workAs">web developper</span>
                <span className="workFor"><a href="https://www.cieledoubledesclefs.org/les-veilleurs/">les veilleurs</a></span>
                <span className="workAs">sound operator</span>
                <span className="workFor"><a href="http://www.estrarre.fr/theatre/?p=1654">macbeth</a></span>
                <span className="workAs">light operator</span>
                <span className="workFor"><a href="https://www.imdb.com/title/tt9372172/?ref_=ttfc_fc_tt">forte</a></span>
                <span className="workAs">assistant manager</span>
                <span className="workFor"><a href="https://www.imdb.com/title/tt7998848/?ref_=nm_flmg_wr_3">play</a></span>
                <span className="workAs">assistant manager</span>
            </div>
        </div>
    )
}

export default Resume
