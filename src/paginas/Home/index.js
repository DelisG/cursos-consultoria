import { TemaContext } from "../../contexts/TemaContext";
import { useContext, useEffect, useState } from "react";
import javascript from "../../assets/javascript.png";
import php from "../../assets/php.png";
import java from "../../assets/java.png";

const Home = () => {
  const { temaBody, temaTexto } = useContext(TemaContext);


  return (
    <>
      <div className={`bg-${temaBody} ${temaTexto} algin-center p-8`}>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner mx-auto">
            <div class="carousel-item active">
              <img
                src={javascript}
                class="d-block w-100"
                alt="imagem-carrossel"
                height="500"
              />
              <div class="carousel-caption d-none d-md-block text-secondary">
                <h5>Curso JavaScript</h5>
                <p>
                  "Aprenda fundamentos da lógica de programação e Orientação a
                  Objetos."
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={php}
                class="d-block w-100"
                alt="imagem-carrossel"
                height="500"
              />
              <div class="carousel-caption d-none d-md-block text-secondary">
                <h5>Curso PHP</h5>
                <p>
                  "Aprenda fundamentos da lógica de programação e Orientação a
                  Objetos.",
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={java}
                class="d-block w-100"
                alt="imagem-carrossel"
                height="500"
              />
              <div class="carousel-caption d-none d-md-block text-secondary">
                <h5>Curso Java</h5>
                <p>
                  "Aprenda fundamentos da lógica de programação e Orientação a
                  Objetos.",
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
