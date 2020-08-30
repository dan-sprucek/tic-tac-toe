import React from 'react'
import Cell from './Cell'

const Board = ({handleClick}) => {
    return (
        <div id='board'>
            <div className='row'>
                <Cell handleClick={handleClick} value='1'/>
                <Cell handleClick={handleClick} value='2'/>
                <Cell handleClick={handleClick} value='3'/>
            </div>
            <div className='row'>
                <Cell handleClick={handleClick} value='4'/>
                <Cell handleClick={handleClick} value='5'/>
                <Cell handleClick={handleClick} value='6'/>
            </div>
            <div className='row'>
                <Cell handleClick={handleClick} value='7'/>
                <Cell handleClick={handleClick} value='8'/>
                <Cell handleClick={handleClick} value='9'/>
            </div>
        </div>
    )
}

export default Board