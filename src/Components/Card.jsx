import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
    <img className='card-img' src={props.img}/>
    <div  className='card-desc'>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button>Detaylar</button>
    </div>
    </div>
  )
}

export default Card