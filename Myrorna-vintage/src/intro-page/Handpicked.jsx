import React from 'react'
import jacket from '../assets/pilotjacket.png'
import bluehat from '../assets/bluehat.png'
import HandpickedCard from './HandpickedCard'
const pilotJacket = {
    img: 'https://storage.cloud.google.com/handpicked/pilotjacket.png',
    title: "Vintage Pilot Jacket",
    price: "1299kr",
    desc: "Featuring a classic pilot jacket design, this jacket has a timeless appeal that will never go out of style. It has a durable leather exterior and a warm, insulated interior, making it perfect for keeping warm on cold flights or on the ground. The jacket also has multiple pockets for storing small items, and a comfortable and adjustable fit.",
    number: 1
}
const handpickedVest = {
    img: 'https://storage.cloud.google.com/handpicked/blackvest.png',
    title: "Our Legacy - Vest",
    price: "749kr",
    desc: "The Our Legacy Black Vest is a versatile and stylish piece of clothing that is perfect for any occasion. Made from high-quality materials, this vest is comfortable to wear and will last for years to come.",
    number: 2
}
const handpickedHat = {
    img: 'https://storage.cloud.google.com/handpicked/bluehat.png',
    title: "COS - Hat",
    price: "149kr",
    desc: "The COS Blue Knit Beanie is a stylish and comfortable accessory that is perfect for keeping warm during the colder months. Made from high-quality knit material, this beanie is soft to the touch and will provide plenty of warmth and insulation on chilly days.",
    number: 3
}

export default function Handpicked() {

    async function fetchProducts(){
        const url = "http://localhost:4000/handpicked"
        const response = await fetch(url)
        const data = await response.json();
        console.table(data)
     }
     fetchProducts()
    return (
        <section className='handpicked-section'>
            <h1 id="handpicked-title"><span id="hand">Hand</span> <span id="picked">Picked</span></h1>
            <HandpickedCard {...pilotJacket} />
            <HandpickedCard {...handpickedVest} />
            <HandpickedCard {...handpickedHat} />
            <button id="handpicked-seemore">See more!</button>
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