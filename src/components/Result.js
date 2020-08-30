import React from 'react'

const Result = ({inPlay, newGame, winner}) => {
    return (
        <div>
            {inPlay 
            ? <div className='resultContainer'><button onClick={newGame}>Restart the game</button></div> 
            : winner
            ? <div className='resultContainer'><h2>{winner} wins the game! Congratulations!</h2><button onClick={newGame}>Start a new game</button></div>
            : <div className='resultContainer'><h2>It's a tie!</h2><button onClick={newGame}>Start a new game</button></div>}
        </div>
    )
}

export default Result