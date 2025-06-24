import React from 'react'
import Chip from './Chip'
import Rating from './Rating'
import star from '../images/star.png'

function Movie({ movie }) {
    const { id, title, category, rating, description, year, image } = movie

    return (
        <div id={id} className=''>
            <div className='movie'>
                <img src={image} alt={title} width={250} height={320} style={{ borderRadius: '10px' }} />
                <div>
                    <div className='movie-header ' style={{ justifyContent: 'space-between' }}>
                        <div style={{ display: 'inline-block', gap: '0px' }}>
                            <h2 className='movie-title'>{title}</h2>
                            <h3 className='movie-year'>{year}</h3>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <img src={star} alt='star' width={30} height={30} />
                            <Rating rate={rating + "/10"} />
                        </div>
                    </div>
                    <div style={{ gap: '5px', display: 'flex', justifyContent: 'center' }} >
                        {category.map((category) => <Chip key={category} category={category} />)}
                    </div>

                    <p className='movie-description'>{description}</p>
                </div>

            </div>
        </div>

    )
}

export default Movie