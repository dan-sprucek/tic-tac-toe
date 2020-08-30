import React from 'react'

const Cell = ({handleClick, value}) => {
    return (
        <div className='cell' onClick={handleClick} data-value={value}></div>
    )
}

export default Cell