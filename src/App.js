import React, { useState } from 'react'
import Board from './components/Board'
import Scoreboard from './components/Scoreboard'
import Result from './components/Result'


const App = () => {
    const [currentSymbol, setCurrentSymbol] = useState('X')
    const [xSelected, setXSelected] = useState([])
    const [oSelected, setOSelected] = useState([])
    const [inPlay, setInPlay] = useState(true)
    const [winner, setWinner] = useState('')
    const [xScore, setXScore] = useState(0)
    const [oScore, setOScore] = useState(0)

    
    const handleClick = (e) => {
        let checkForWin
        if (inPlay) {
            if (e.target.innerHTML === '') {
                e.target.innerHTML = currentSymbol
                if (currentSymbol === 'X') {
                    setCurrentSymbol('O')
                    setXSelected(xSelected.concat(e.target.dataset.value))
                    checkForWin = xSelected.concat(e.target.dataset.value)
                } else {
                    setCurrentSymbol('X')
                    setOSelected(oSelected.concat(e.target.dataset.value))
                    checkForWin = oSelected.concat(e.target.dataset.value)
                }
                if ((checkForWin.includes('1') && checkForWin.includes('2') && checkForWin.includes('3')) 
                    || (checkForWin.includes('1') && checkForWin.includes('5') && checkForWin.includes('9'))
                    || (checkForWin.includes('1') && checkForWin.includes('4') && checkForWin.includes('7'))
                    || (checkForWin.includes('2') && checkForWin.includes('5') && checkForWin.includes('8'))
                    || (checkForWin.includes('3') && checkForWin.includes('5') && checkForWin.includes('7'))
                    || (checkForWin.includes('3') && checkForWin.includes('6') && checkForWin.includes('9'))
                    || (checkForWin.includes('4') && checkForWin.includes('5') && checkForWin.includes('6'))
                    || (checkForWin.includes('7') && checkForWin.includes('8') && checkForWin.includes('9'))) {
                    setWinner(currentSymbol)
                    if (currentSymbol === 'X') {
                        setXScore(xScore + 1)
                    } else {
                        setOScore(oScore + 1)
                    }
                    setInPlay(false)
                } else if (checkForWin.length === 5) {
                    setInPlay(false)
                }
            }
        }
    }

    const newGame = () => {
        currentSymbol === 'X' ? setCurrentSymbol('X') : setCurrentSymbol('O')
        setXSelected([])
        setOSelected([])
        setInPlay(true)
        setWinner('')
        let cells = document.querySelectorAll('div.cell')
        cells.forEach(cell => cell.innerHTML = '')
    }
    
    return (
        <div className='container'>
            <h1>Hello to Tic-Tac-Toe!</h1>
            {xSelected.length === 0 && oSelected.length === 0 ? <h2>{currentSymbol} starts the game!</h2> : inPlay ? <h2>Next player is: {currentSymbol}</h2> : <h2>&nbsp;</h2>}
            <Board handleClick={handleClick}/>
            <Scoreboard xScore={xScore} oScore={oScore}/>
            <Result inPlay={inPlay} newGame={newGame} winner={winner}/>
        </div>
    )
}

export default App