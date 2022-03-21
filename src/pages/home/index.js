import { useState } from "react";
import { FiLink } from "react-icons/fi";
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import "./home.css";

function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleShortLink() {
    setShowModal(true);
  }

  return (
    <div className="container-home">
      <div className="logo">
        <FiLink size={150} color="#fff" />

        <h1>EncurtaLink</h1>
        <span>Cole seu link para encurta-lo 👇</span>
      </div>

      <div className="area-input">
        <div className="icon">
          <FiLink size={24} color="#fff" />
          <input
            type="text"
            placeholder="Cole seu link aqui"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Encurtar link</button>
      </div>

      <Menu />

      {showModal && <LinkItem closeModal={() => setShowModal(false)} />}
    </div>
  );
}

export default Home;
