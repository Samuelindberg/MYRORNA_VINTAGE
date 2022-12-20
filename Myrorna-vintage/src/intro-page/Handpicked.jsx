import React, { useState, useEffect } from "react";
import jacket from "../assets/pilotjacket.png";
import bluehat from "../assets/bluehat.png";
import HandpickedCard from "./HandpickedCard";
import Datafetching from "./Datafetching";

export default function Handpicked() {
  return (
    <section className="handpicked-section">
      <h1 id="handpicked-title">
        <span id="hand">Hand</span> <span id="picked">Picked</span>
      </h1>
      <Datafetching />
      <HandpickedCard />
      <button id="handpicked-seemore">See more!</button>
    </section>
  );
}
window.addEventListener("scroll", () => {
  const picked = document.getElementById("picked");
  const jacket = document.getElementById("pilotjacket-img");
  if (scrollY) {
    picked.style.opacity = 0 + scrollY / 800;
    picked.style.opacity > 0.6
      ? (document.getElementById("hand").style.opacity = 1)
      : console.log();
  }
});
