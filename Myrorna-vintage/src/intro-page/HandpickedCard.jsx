import React from 'react'
import jacket from '../assets/pilotjacket.png'
export default function HandpickedCard(props) {
    return (
        <section className='handpicked-card'>
            <img src={jacket} alt="" id='pilotjacket' />
            <div id="handpicked-content">
                <h1>Our Legacy – Pilot Jacket</h1>
                <p></p>
                <img src="" alt="" />
                <h3><span id="price">Price:</span> 1299kr</h3>
            </div>
        </section>
    )
}
window.addEventListener("scroll", () => {
    const image = document.getElementById("pilotjacket");
})