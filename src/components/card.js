import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className='cards'>
         <div className='card'>
          <img src={props.imgscr} alt='no_img' className='card__img' />
          <div className='card__info'>
          <span className='card__category'>{props.title}</span>
          <h4 className='card__title'>{props.name} </h4>
          <a href={props.Link} target="_blank">
          <button > Watch Now</button>
          </a>
          </div>
         </div>
      </div>
    </>
  )
}

export default Card
