import { TemaContext } from "../contexts/TemaContext";
import { useContext, useEffect, useState } from "react";


const CursoCard = ({ imagem, titulo, texto, rotulo }) => {
    const { temaBody, temaTexto } = useContext(TemaContext);

  return (
    <div className={`bg-${temaBody} ${temaTexto} p-5`} style={{ width: 350 }}>
      <img src={imagem} className="card-img-top p-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>
        <a href="/" className="btn btn-warning">
          {rotulo}
        </a>
      </div>
    </div>
  );
};

export default CursoCard;
