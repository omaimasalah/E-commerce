import { Link } from "react-router"; 
import { logo } from "./assets/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <section id="header">
        <Link to="#"><img src={logo} alt="Logo" /></Link>

        <div>
          <ul id="navBar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faCartShopping} className="cart1" />
              </Link>
            </li>
          </ul>
        </div>

      </section>
    </div>
  );
};

export default Navbar;
