import React from "react"; 
import "./Spotlight.css"; 
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Bhuvam from "./bhuvanBam.png";
import KushKapla from "./KushKalpa.png"; 
import Rohan from "./RoshanJoshi.png";

function Spotlight() {
    const creators = [
        { name: "Bhuvan Bam", followers: "3.1M", image: Bhuvam, social: ["instagram", "youtube", "facebook"] },
        { name: "KushKapla", followers: "2.5M", image: KushKapla, social:["instagram", "youtube", "facebook"] },
        { name: "Rohan Joshi", followers: "1.2M", image: Rohan, social: ["instagram", "youtube", "facebook"] },
        { name: "Bhuvan Bam", followers: "3.1M", image: Bhuvam, social: ["instagram", "youtube", "facebook"]},
    ];

    return (
        <div className="spotlight-container">
            <div className="creators-header">
                <h1>In The Spotlight</h1>
                <div className="creators-intro">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="view-all-button">View All</button>
                </div>
            </div>
            <div className="creators-cards">
                {creators.map((creator, index) => (
                    <div className="creator-card" key={index}>
                        <img src={creator.image} alt={creator.name} className="creator-image" />
                        <div className="creator-details">
                            <div className="creator-name-badge">
                                 <div>
                                 <h4>{creator.name}  <RiVerifiedBadgeFill /></h4>  
                                 </div>
                                 <div>Creator Name</div>
                            </div>
                            <div className="creator-name-badge follower">
                            <h4>{creator.followers}</h4>
                            <span className="followers-text">Followers</span>
                            </div>
                        </div>
                        <hr className="divider" />
                        <div className="apps">
                        <div className="creator-social">
                            {creator.social.includes("instagram") && <AiFillInstagram />}
                            {creator.social.includes("youtube") && <FaYoutube />}
                            {creator.social.includes("facebook") && <FaFacebook />}
                        </div>
                        <button className="compare-button">Compare</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Spotlight;