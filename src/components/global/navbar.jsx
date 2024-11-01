import Button from 'react-bootstrap/Button';
import "./index.css"
import { Outlet, Link } from "react-router-dom";

export default function Navbar(){
    const baseUrl = "http://localhost:3000";
    const home = "/home";
    const about = "/about";


    return(
        <div className='navbar'>
            <Link to="/"><Button className="navbar-btns">Home</Button></Link>
            <Link to="/about"><Button className="navbar-btns">About</Button></Link>
            <Link to="/dashboard"><Button className="navbar-btns">Dashboard</Button></Link>
            <Link to="/noting-here"><Button className="navbar-btns">Nothing Here</Button></Link>

            <Outlet />
        </div>
    )
}