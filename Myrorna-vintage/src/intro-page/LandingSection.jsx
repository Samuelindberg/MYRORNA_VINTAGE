import React from 'react'
import outfit from '../assets/greenshirt.png'
let title = document.getElementById("landing-title");
export default function LandingSection() {
    return (
        <section className='landing-section-container'>
            <h1 id='landing-title'>A Vintage Store that cares for your wallet and the environment</h1>
        </section>
    )
}
window.addEventListener("scroll", () => {
    console.log(scrollY)
    title.style.transform = 'translateX(' + scrollY + 'px)'
    title.style.opacity = 1 - scrollY / 400;
})