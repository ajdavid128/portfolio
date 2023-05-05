import Project2Slideshow from "./Project1Slideshow";

// import landing_page from "../Media/flatstocker/landing_page.png";
import github from "../Media/icons/github.png";
import link from "../Media/icons/link.png";
import youtube from "../Media/icons/youtube.png";
import left_arrow from "../Media/icons/left_arrow.png";
import right_arrow from "../Media/icons/right_arrow.png";


function Project2() {


    return (
        <div>
            <div className="project-image-title-container">
                <Project2Slideshow />
                {/* <img className="project-images-size" src={landing_page} alt="flatstocker website landing page" /> */}
                <div className="project-arrow-title-container">
                    <img onClick="" className="arrow-icon" src={left_arrow} alt="left arrow" />
                    <h1 className="project-title">Dough</h1>
                    <img onClick="" className="arrow-icon" src={right_arrow} alt="right arrow" />
                </div>
            </div>
            <div className="project-details-container">
                <div className="description-container">
                    <h3 className="project-details-title">Description</h3>
                    <p className="project-details-content">Dough is a budgeting app that helps you keep track of your expenses month to month. It is based off of the 50/30/20 budgeting Model. That being 50 for mandatory expenses like bills and insurance, the 30 for entertainment, travel and fun and the 20 for paying down debts and saving money. Dough is a React and Ruby on Rails Single-Page Web Application designed by Aaron David, Keila Lopez and Lindsay Taylor.</p>
                </div>
                <div className="features-container">
                    <h3 className="project-details-title">Features</h3>
                    <ul className="project-details-content">
                        <li> Create an account, log in/out, and update or delete account</li>
                        <li>Add, update and delete expenses and categories</li>
                        <li>Associate expenses with specific categories</li>
                        <li>Monitor current expenses compared to monthly income </li>
                        <li>Quick view of recent expenses by way of the dashboard</li>
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

export default Project2;