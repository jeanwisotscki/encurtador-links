import { useState } from "react";
import { FiLink } from "react-icons/fi";
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";

import "./home.css";

function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", { long_url: link });

      setData(response.data);
      setShowModal(true);
      saveLink("@encurtaLink", response.data);
      setLink("");
    } catch {
      alert("Ops... Parece que algo deu errado! Tente novamente. ");
      setLink("");
    }
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

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}

export default Home;
