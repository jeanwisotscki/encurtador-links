import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";

export default function LinkItem({ closeModal, content }) {
  async function copyLink() {
    await navigator.clipboard.writeText(content.link);
    alert("Link copiado com sucesso!");
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#172742" />
        </button>
      </div>

      <span> {content.long_url} </span>

      <button className="modal-link" onClick={copyLink}>
        {content.link}
        <FiClipboard size={28} color="#fff" />
      </button>
    </div>
  );
}
