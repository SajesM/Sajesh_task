import { Link} from "react-router-dom";
import "./styles.css";

function Navbar({setOpen}) {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/Products">Products</Link></li>
        <li><button onClick={()=>setOpen(true)}>Cart</button></li>
      </ul>
    </div>
  );
}

export default Navbar;
