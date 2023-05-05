import landing_page from "../Media/flatstocker/landing_page.png"


function Project1() {


    return (
        <div>
            <div className="project-image-title">
                <img className="project-images-size" src={landing_page} alt="flatstocker website landing page" />
                <h1 className="project-title">FlatStocker</h1>
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
            <div className="project-links">
                <div onClick="">
                    <img src="" alt="" />
                    <h6>GitHub</h6>
                </div>
                <div onClick="">
                    <img src="" alt="" />
                    <h6>Demo</h6>
                </div>
                <div onClick="">
                    <img src="" alt="" />
                    <h6>Site</h6>
                </div>
            </div>
        </div>
    )
}

export default Project1;