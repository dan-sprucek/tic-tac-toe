import React from 'react'

const Scoreboard = ({xScore, oScore}) => {

    return (
        <div>
            <h2 className='scoreHeadline'>Scoreboard</h2>
            <div className='score'>
                <div className={xScore > oScore ? 'winning' : xScore < oScore ? 'losing' : undefined}>X : {xScore}</div>
                <div className={oScore > xScore ? 'winning' : oScore < xScore ? 'losing' : undefined}>O : {oScore}</div>
            </div>
        </div>
    )
}

export default Scoreboard