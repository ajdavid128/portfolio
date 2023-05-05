import React, {useState} from "react"




function Project2Slideshow(){

//Array of images >>>
const images = [ 
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

export default Project2Slideshow;