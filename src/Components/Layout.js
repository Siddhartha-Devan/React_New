import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <nav>
                <Link to = "/">
                    <button type = "button" className="buttons">Profile</button>
                </Link>
                
                <Link to = "/resume">
                    <button type = "button" className="buttons">Resume</button>
                </Link>
                <Link to = "/projects">
                    <button type = "button" className="buttons">Projects</button>
                </Link>
            </nav>
            <Outlet />
        </div>
    )
};

export default Layout;

