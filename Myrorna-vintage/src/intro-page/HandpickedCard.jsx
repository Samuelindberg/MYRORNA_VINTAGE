import React from 'react'

export default function HandpickedCard(props) {
    return (
        <section className='handpicked-card' id={props.number % 2 == 0 ? "right" : "left"}>
            <img src={props.img} alt="" className='image-handpicked' />
            <div id="handpicked-content">
                <h1 id='handpicked-card-title'>{props.title}</h1>
                <p>{props.desc}</p>
                <h3><span id="price">Price: </span>{props.price}</h3>

            </div>
        </section>
    )
}

