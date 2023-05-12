import { useState } from "react";
import { Icon, Modal, Button } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";

import EmbedVideo from "./EmbedVideo";
import BWme from "../Media/BWme.jpg";


function About() {

    const [toggleVideo, setToggleVideo] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const showVideo = () => {
        setToggleVideo(!toggleVideo);
    }
    const str = "Introduction"

    return (
        <div id="about-page-container">
            <h1>About: The History of Cool Beans</h1>
            {/* {toggleVideo ? 
            <div id="video-parent-container">
                <div>
                    <EmbedVideo embedId="PyHPSrk18d4" />
                </div>
                <div className="video-child-container">
                    <h4 onClick={showVideo} id="video-toggle-text">Back to Bio</h4>
                </div>
            </div>
            
            : */}
            <div id="about-text-photo">
                <div>
                    <img id="about-photo" src={BWme} alt="Aaron David portrait"/>
                </div>
                <div id="about-text">
                    <p> I am a Full-Stack Software Engineer with programming experience centered around React.js and Ruby on Rails based web-development. My bachelor's degree is in Fine Art and I have professional experience in textile manufacturing. I am well versed in team leadership, production and project management, process optimization, organization and delegation. As a highly motivated, multi-tasking individual that thrives when confronted with a problem in need of a solution I am quick to learn, can appreciate a challenge and I excel in a hands-on work environment that encourages creativity. I pride myself on my patience, ability to communicate clearly and concisely, and strive to bring teams together to achieve mutual goals.</p>
                </div>
                <div>
                    <Modal basic
                        onClose={() => setModalOpen(false)}
                        onOpen={() => setModalOpen(true)}
                        open={modalOpen}
                        trigger={<h4>Introduction Video</h4>} 
                    >
                        <Modal.Header>Inntroduction Video</Modal.Header>
                        <Modal.Content>
                            <EmbedVideo embedId="PyHPSrk18d4" />
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={() => setModalOpen(false)}>
                                Close Video
                            </Button>
                        </Modal.Actions>
                    </Modal>
                    {/* <button onClick={showVideo} id="box3">click me</button> */}
                </div>
            </div>
            {/* } */}
            <div className="nav-left-arrow">
                <Link to="/experience"> 
                <div className="center-side-arrow-parent">
                    <div>
                        <Icon link  name="caret left" size="big"/>
                    </div>
                    <div>
                        <p>Experience</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className="nav-down-arrow">
                <Link to="/contact"> 
                <div className="center-nav-arrow-parent">
                    <div>
                        <p>Contact</p>
                    </div>
                    <div className="center-nav-arrow-icon">
                        <Icon link  name="caret down" size="big"/>
                    </div>
                </div>
                </Link>
            </div>
            <div className="nav-right-arrow">
                <Link to="/projects"> 
                    <div className="center-side-arrow-parent">
                        <div>
                            <p>Projects</p>
                        </div>
                        <div>
                            <Icon link  name="caret right" size="big"/>
                        </div>
                    </div>    
                </Link>
            </div>
        </div>
    )
};

export default About;

