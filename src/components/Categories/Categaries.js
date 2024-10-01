import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import "./Categories.css";
import Fashionist from "./Fashionist.png";
import Traveller from "./Traveller.png";
import Vloger from "./Volger.png"; 

function Categories() {
    const categories = [
        { name: "The Fitness", image: Vloger, backgroundColor: "#ff0001" },
        { name: "The Dancer", image: Traveller, backgroundColor: "#8af54e" },
        { name: "The Fashionistas", image: Fashionist, backgroundColor: "#2664d9" },
        { name: "The Podcasters", image: Vloger, backgroundColor: "#e23046" },
        { name: "The Traveller", image: Traveller, backgroundColor: "#7233da" }
    ];

    return (
        <div className="categorie-container">
            <div className="caetgorie-header">
                <h1 className="Influencer-heading">Categories</h1>
                <button className="categories-button">View All</button>
            </div>
            <div className="influencers">
                {categories.map((category, index) => (
                    <div
                        className="influencers-card"
                        key={index}
                        style={{ backgroundColor: category.backgroundColor }} // Applying dynamic background color
                    >
                        <div className="card-header">
                            <h3>{category.name}</h3>
                            <BsArrowUpRightCircle />
                        </div>
                        <div className="card-image">
                            <img src={category.image} alt={category.name} className="category-image" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;

