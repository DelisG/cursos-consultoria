import { createContext, useEffect, useState } from "react";

export const TemaContext = createContext();

const TemaProvider = ({ children }) => {
  const [checked, setChecked] = useState(true);
  const [tema, setTema] = useState("light");
  const [temaBody, setTemaBody] = useState("light");
  const [temaTexto, setTemaTexto] = useState("text-dark");

  useEffect(() => {
    setTema(checked ? "light" : "dark");
    setTemaBody(checked ? "light" : "dark");
    setTemaTexto(checked ? "text-dark" : "text-light");
  }, [checked]);

  return (
    <TemaContext.Provider
      value={{ checked, setChecked, tema, setTema, temaBody, temaTexto }}
    >
      {children}
    </TemaContext.Provider>
  );
};

export default TemaProvider;
