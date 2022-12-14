import React from 'react'
import jacket from '../assets/pilotjacket.png'
import HandpickedCard from './HandpickedCard'
export default function Handpicked() {
    return (
        <section className='handpicked-section'>
            <h1 id="handpicked-title"><span id="hand">Hand</span> <span id="picked">Picked</span></h1>
            <HandpickedCard img={jacket} title="Our Legacy – Pilot Jacket" price="1299kr" />
        </section>
    )
}
window.addEventListener("scroll", () => {
    const picked = document.getElementById("picked");
    const jacket = document.getElementById("pilotjacket-img");
    console.log(window.innerHeight)
    if (scrollY) {
        picked.style.opacity = 0 + scrollY / 800;
        picked.style.opacity > 0.6 ? document.getElementById("hand").style.opacity = 1 : console.log();
    }

})