import Project1Slideshow from "./Project1Slideshow";

// import landing_page from "../Media/flatstocker/landing_page.png";
import github from "../Media/icons/github.png";
import link from "../Media/icons/link.png";
import youtube from "../Media/icons/youtube.png";
import left_arrow from "../Media/icons/left_arrow.png";
import right_arrow from "../Media/icons/right_arrow.png";


function Project1() {


    return (
        <div>
            <div className="project-image-title-container">
                <Project1Slideshow />
                {/* <img className="project-images-size" src={landing_page} alt="flatstocker website landing page" /> */}
                <div className="project-arrow-title-container">
                    <img className="arrow-icon" src={left_arrow} alt="left arrow" />
                    <h1 className="project-title">FlatStocker</h1>
                    <img className="arrow-icon" src={right_arrow} alt="right arrow" />
                </div>
            </div>
            <div className="project-details-container">
                <div className="description-container">
                    <h3 className="project-details-title">Description</h3>
                    <p className="project-details-content">FlatStocker is a full-stack inventory management web application inspired by my past profession as a Production Manager at a textile manufacturing company. Created as my capston project during the last phase of Flatiron School's Software Engineering Bootcamp.</p>
                </div>
                <div className="features-container">
                    <h3 className="project-details-title">Features</h3>
                    <ul className="project-details-content">
                        <li> Create an account, log in/out, and update or delete account</li>
                        <li>Add, update and delete items in inventory</li>
                        <li>Add retailer information and associate items within inventory to specific retailers</li>
                        <li>Monitor inventory levels with ease by color coordinated table </li>
                        <li>Warnings delivered to user dashboard for items with low stock levels</li>
                        <li>Searchable inventory listings</li>
                    </ul>
                </div>
                <div className="technology-container">
                    <h3 className="project-details-title">Technology</h3>
                    <p className="project-details-content">JavaScript | React | Ruby on Rails | PostgreSQL | Semantic UI | React Router</p>
                </div>
            </div>
            <div className="project-links-container">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="project-links" onClick="">
                        <img className="project-icons" src={github} alt="github logo" />
                        <h6 className="project-link-text">GitHub</h6>
                    </div>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="project-links" onClick="">
                        <img className="project-icons" src={youtube} alt="youtube logo" />
                        <h6 className="project-link-text">Demo</h6>
                    </div>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="project-links" onClick="">
                        <img className="project-icons" src={link} alt="chainlink icon" />
                        <h6 className="project-link-text">Site</h6>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Project1;