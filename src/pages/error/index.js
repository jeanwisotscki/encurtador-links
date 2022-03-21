import "./error.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container-error">
      <h1 className="not-found">Error 404</h1>
      <h1>Página não encontrada 🤷</h1>
      <Link to={"/"}>
        <button className="btn">Voltar para Home</button>
      </Link>
    </div>
  );
}
