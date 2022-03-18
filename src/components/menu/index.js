import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import "./menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <a className="icon" href="#">
        <BsFacebook size={32} color="#fff" />
      </a>
      <a className="icon" href="#">
        <BsInstagram size={32} color="#fff" />
      </a>

      <Link to="/links">
        <button className="btn-meus-links">Meus links</button>
      </Link>
    </div>
  );
}
