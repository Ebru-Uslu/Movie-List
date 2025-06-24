import React from 'react'
import '../css/Chip.css'

function Chip({ category }) {
    return (
        <div className='chip'>
            {category}
        </div>
    )
}

export default Chip