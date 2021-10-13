import React from 'react'
import './card.scss'
import Swal from 'sweetalert2'


const Card = ({ title, imagen, description, releaseYear }) => {

    const modal = () => {
        Swal.fire({
            title: `${title} (${releaseYear})`,
            html: `<p> ${description} ${releaseYear}</p>`,
            imageUrl: imagen,
            imageWidth: 300,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
    }


    return (
        <div className="containerCard">
            <div className='card'>
                <div className="card__img" title={title}>
                    <img src={imagen} alt="Poster" />
                </div>
                <div className="card__title">
                    <button onClick={()=> modal(title, imagen, description, releaseYear)} >
                        <p>{title}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
