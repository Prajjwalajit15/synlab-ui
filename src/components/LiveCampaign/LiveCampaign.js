import React from "react";
import "./LiveCampaign.css"; 

function LiveCampaign() {
    return (
        <section id="slider"> 
            <input type="radio" name="slider" id="s1" checked />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />

            <label htmlFor="s1" id="slide1">
                <img src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" alt="Slide 1" />
            </label>
            <label htmlFor="s2" id="slide2">
                <img src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg" alt="Slide 2" />
            </label>
            <label htmlFor="s3" id="slide3">
                <img src="https://wallpaperaccess.com/full/1154341.jpg" alt="Slide 3" />
            </label>
            <label htmlFor="s4" id="slide4">
                <img src="https://wallpapercave.com/wp/wp2634222.jpg" alt="Slide 4" />
            </label>
            <label htmlFor="s5" id="slide5">
                <img src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg" alt="Slide 5" />
            </label>
        </section>
    );
}

export default LiveCampaign;
