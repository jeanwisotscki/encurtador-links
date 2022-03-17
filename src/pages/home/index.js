import { FiLink } from "react-icons/fi";
import "./home.css";

function Home() {
  return (
    <div className="container-home">
      <div className="logo">
        <FiLink size={200} color="#fff" />

        <h1>EncurtaLink</h1>
        <span>Cole seu link para encurta-lo 👇</span>
      </div>

      <div className="area-input">
        <div className="icon">
          <FiLink size={24} color="#fff" />
          <input type="text" placeholder="Cole seu link aqui" />
        </div>

        <button>Encurtar link</button>
      </div>
    </div>
  );
}

export default Home;
