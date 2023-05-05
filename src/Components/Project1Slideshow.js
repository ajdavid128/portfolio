import React, {useState} from "react"

import landing_page from "../Media/flatstocker/landing_page.png";
import add_inventory from "../Media/flatstocker/add_inventory.png";
import all_inventory from "../Media/flatstocker/all_inventory.png";
import dashboard from "../Media/flatstocker/dashboard.png";
import itemized_inventory from "../Media/flatstocker/itemized_inventory.png";
import retailers from "../Media/flatstocker/retailers.png";


function Project1Slideshow(){

//Array of images >>>
const images = [ landing_page, dashboard, all_inventory, itemized_inventory, add_inventory, retailers
]

//Our State >>>
const [nextIndex, setNextIndex] = useState (0);

//Update "images" to your array name >>>
const arrayLength = images.length;

//Our setTimeout method >>>
setTimeout(() => {
    nextIndex < arrayLength -1 ? setNextIndex(nextIndex + 1) : setNextIndex(0)
  }, 3000);


return(
    <div id="slideshow-container">
        <div id="slideshow-image-container">
            <img className="slideshow-image" src={images[nextIndex]} alt="flatstocker" ></img>
        </div>
    </div>
)
}

export default Project1Slideshow;