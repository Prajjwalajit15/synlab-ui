import React from "react";
import './HeroSection.css'; 
import HeroImage from "./HeroImage.png"; 
import calvinKlein from "./CalvinKlein.png";
import chanel from "./chanel.png";
import denim from "./Denim.png";
import louis from "./LouisVuittion.png"; 
import prada from "./Prada.png"; 

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <span className="emoji">👋</span>
                <h1 className="hero-h1">Simplifying Influencer Marketing For You!</h1>
                <p>Explore creators across YouTube, Instagram & Facebook to curate unique content for your brand</p>
                <select className="platform-select">
                    <option>Instagram</option>
                    <option>Facebook</option>
                    <option>WhatsApp</option>
                    <option>SnapChat</option>
                    <option>YouTube</option>
                </select>
                <select className="category-select">
                    <option>All Categories</option>
                    <option>Beauty</option>
                    <option>Travel</option>
                    <option>Fitness</option>
                    <option>Tech</option>
                    <option>Food</option>
                </select>
                <button className="search-button">Search</button>

                {/* Move the image gallery inside hero-content */}
                <div className="image-gallery"> 
                    <p className="heading-image ">Trusted By</p>
                     <div className="other-images">
                        <img src={chanel} alt="Chanel" className="gallery-image" />
                        <img src={louis} alt="Louis Vuitton" className="gallery-image" />
                        <img src={prada} alt="Prada" className="gallery-image" />
                        <img src={calvinKlein} alt="Calvin Klein" className="gallery-image" />
                        <img src={denim} alt="Denim" className="gallery-image" />
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src={HeroImage} alt="Hero" />
            </div>
        </div>
    );
}

export default HeroSection;
