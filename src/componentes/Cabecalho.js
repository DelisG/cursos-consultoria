import { useContext } from "react";
import { Link } from "react-router-dom";
import { TemaContext } from "../contexts/TemaContext";
import { useLocation } from "react-router-dom";

const Cabecalho = () => {
  const { checked, setChecked, tema } = useContext(TemaContext);
  const location = useLocation();

  const nome = location.state?.nome;

  return (
    <nav className={`navbar navbar-expand-lg bg-${tema}`} data-bs-theme={tema}>
      <div className="container-fluid px-5">
        <Link className="navbar-brand" to="/">
          Cursos & Consultoria
        </Link>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onChange={() => {
              setChecked(!checked);
            }}
            checked={checked}
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">
                Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/consultoria">
                Consultoria
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                {!!nome ? <div>{nome}</div> : <div>Login</div>}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-person-fill "
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Cabecalho;
