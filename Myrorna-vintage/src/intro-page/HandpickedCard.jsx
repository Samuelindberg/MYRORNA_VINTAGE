import React from 'react'
export default function HandpickedCard(props) {
    return (
        <section className='handpicked-card'>
            <img src={props.img} alt="" id='image-handpicked' />
            <div id="handpicked-content">
                <h1>{props.title}</h1>
                <p></p>
                <h3><span id="price">Price: </span>{props.price}</h3>
            </div>
        </section>
    )
}
window.addEventListener("scroll", () => {
    const image = document.getElementById("image-handpicked");
    image.style.opacity = 0 + scrollY / 800;
})