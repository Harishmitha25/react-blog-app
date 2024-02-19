import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Simple Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}
                {/* <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#7C5576",
                    borderRadius: "8px"
                }}>New Blog</a> */}
                {/* <a href="/create">New Blog</a> */}

                {/* href request goes to server */}

                {/* We use Link for React router to intercept request to server for particular path and render the page quickly */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;