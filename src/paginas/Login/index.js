import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { TemaContext } from "../../contexts/TemaContext";

const Login = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const { temaBody, temaTexto } = useContext(TemaContext);

  const navigation = useNavigate();

  useEffect(() => {
    console.log(nome);
  }, [nome, senha]);

  return (
    <div className={`bg-${temaBody} ${temaTexto}`}>
      <form className="form-signin w-100 m-auto ">
        <div align="center">
          {/* <img
            className="mb-4 w-25"
            src={logo}
            alt="logo"
            width="350"
            height="170"
          /> */}
          <h1>Login</h1>
        </div>
        <div align="center" className="text-secondary">
          <div className="form-floating w-25 mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onKeyUp={(event) => {
                setNome(event.target.value);
              }}
            />
            <label htmlFor="floatingInput">Nome de usuário:</label>
          </div>
          <div className="form-floating w-25 mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onKeyUp={(event) => {
                setSenha(event.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>

          <div className="checkbox w-25 mb-3">
            <label>
              <input type="checkbox" value="remember-me" />
              Mantenha-me conectado
            </label>
          </div>
          <button
            className="w-25 btn btn-lg btn-warning"
            type="submit"
            onClick={() => {
              navigation("/", {
                state: {
                  nome: nome,
                  senha: senha,
                },
              });
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
