import landing_page from "../Media/flatstocker/landing_page.png"


function Project1() {


    return (
        <div>
            <img className="project-images-size" src={landing_page} alt="flatstocker website landing page" />
            <h1>FlatStocker</h1>
            <div classname="project-details-container">
                <div>
                    <h3>Description</h3>
                    <p>FlatStocker is a full-stack inventory management web application inspired by my past profession as a Production Manager at a textile manufacturing company. Created as my capston project during the last phase of Flatiron School's Software Engineering Bootcamp.</p>
                </div>
                <div>
                    <h3>Features</h3>
                    <ul>
                        <li> Create an account, log in/out, and update or delete account</li>
                        <li>Add, update and delete items in inventory</li>
                        <li>Add retailer information and associate items within inventory to specific retailers</li>
                        <li>Monitor inventory levels with ease by color coordinated table </li>
                        <li>Warnings delivered to user dashboard for items with low stock levels</li>
                        <li>Searchable inventory listings</li>
                    </ul>
                </div>
                <div>
                    <h3>Technology</h3>
                    <p>JavaScript | React | Ruby on Rails | PostgreSQL | Semantic UI | React Router</p>
                </div>
            </div>
            <div>
                <div onClick="">
                    <img src="" alt="" />
                    <h6>GitHub</h6>
                </div>
                <div onClick="">
                    <img src="" alt="" />
                    <h6>Demo</h6>
                </div>
            </div>
        </div>
    )
}

export default Project1;