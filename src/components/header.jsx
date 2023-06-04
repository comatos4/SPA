import { Link } from "react-router-dom";

function Header() {
    return <nav className="deep-orange lighten-2">
        <div className="container">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">SPA</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/* <li><a href="!#">Repository</a></li> */}
                </ul>
            </div>
        </div>
   
  </nav>
}
export { Header };