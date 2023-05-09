import { useState } from "react";
import { Icon } from "semantic-ui-react";

import EmbedVideo from "./EmbedVideo";
import BWme from "../Media/BWme.jpg";


function About() {

    const [toggleVideo, setToggleVideo] = useState(false)

    const showVideo = () => {
        setToggleVideo(!toggleVideo);
    }

    return (
        <div id="about-page-container">
            <h1>About: The History of Cool Beans</h1>
            {toggleVideo ? 
            <div id="video-container">
                <EmbedVideo embedId="PyHPSrk18d4" />
                <button onClick={showVideo}>click me</button>
            </div>
            
            :
            <div id="about-text-photo">
                <div>
                    <img id="about-photo" src={BWme} alt="Aaron David portrait"/>
                </div>
                <div id="about-text">
                    <p> I am a Full-Stack Software Engineer with programming experience centered around React.js and Ruby on Rails based web-development. My bachelor's degree is in Fine Art and I have professional experience in textile manufacturing. I am well versed in team leadership, production and project management, process optimization, organization and delegation. As a highly motivated, multi-tasking individual that thrives when confronted with a problem in need of a solution I am quick to learn, can appreciate a challenge and I excel in a hands-on work environment that encourages creativity. I pride myself on my patience, ability to communicate clearly and concisely, and strive to bring teams together to achieve mutual goals.</p>
                </div>
                <div>
                    <button onClick={showVideo} id="box3">click me</button>
                </div>
            </div>
            }
            <div className="nav-left-arrow">
                <Icon link  name="caret left" size="big"/>
            </div>
            <div className="nav-down-arrow">
                <Icon link  name="caret down" size="big"/>
            </div>
            <div className="nav-right-arrow">
                <Icon link  name="caret right" size="big"/>
            </div>
        </div>
    )
};

export default About;