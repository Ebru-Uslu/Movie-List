import React from 'react'
import '../css/Rating.css'

function Rating({ rate }) {
    return (
        <h2 className='movie-rate'>{rate}</h2>
    )
}

export default Rating