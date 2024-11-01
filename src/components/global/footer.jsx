import { Outlet, Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="footer">
            <Link className="footer-links" to="/home">Home</Link>
            <Link className="footer-links" to="/about">About</Link>
            <Link className="footer-links" to="/dashboard">Dashboard</Link>
            <Link className="footer-links" to="/noting-here">Nothing Here</Link>
            <p>React App &#169; 2024</p>
        </footer>
    )
}