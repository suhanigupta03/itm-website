import React, { useEffect } from "react";
import "./gallery.css";
import campus1 from "../assets/campus1.png";
import campus2 from "../assets/campus2.png";
import campus3 from "../assets/campus3.png";
import campus4 from "../assets/campus4.png";
import campus5 from "../assets/campus5.png";
import campus6 from "../assets/campus6.png";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";
import gallery7 from "../assets/gallery7.jpeg";
import gallery8 from "../assets/gallery8.jpeg";

function Gallery() {
  return (
    <>
      <div className="gallery_main">
        <h1>Gallery Section</h1>
        <div class="grid-container">
          <div>
            <img class="grid-item grid-item-1" src={gallery1} alt="" />
            <p>Tap to view in colored mode</p>
          </div>
          <div>
            <img class="grid-item grid-item-2" src={gallery2} alt="" />
            <p>Tap to view in colored mode</p>
          </div>
          <div>
            <img class="grid-item grid-item-3" src={gallery3} alt="" />
            <p>Tap to view in colored mode</p>
          </div>
          <div>
            <img class="grid-item grid-item-4" src={gallery4} alt="" />
            <p>Tap to view in colored mode</p>
          </div>
          <div>
            <img class="grid-item grid-item-5" src={gallery5} alt="" />
            <p>Tap to view in colored mode</p>
          </div>
          <div>
            <img class="grid-item grid-item-6" src={gallery6} alt="" />
            <p>Tap to view in colored mode</p>
          </div>
          <div>
            <img class="grid-item grid-item-7" src={gallery7} alt="" />
            <p>Tap to view in colored mode</p>
          </div>
          <div>
            <img class="grid-item grid-item-8" src={gallery8} alt="" />
            <p>Tap to view in colored mode</p>
          </div>
          <div>
            <img class="grid-item grid-item-9" src={campus5} alt="" />
            <p>Tap to view in colored mode</p>
          </div>
          <div>
            <img class="grid-item grid-item-10" src={campus6} alt="" />
            <p>Tap to view in colored mode</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;