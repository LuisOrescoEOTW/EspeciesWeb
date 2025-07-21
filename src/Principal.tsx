import "./Principal.css"; // Estilos
import fotoCelu from "./images/fotoCelu.svg";
import guardaparque from "./images/sombrero.png";
import titulo from "./images/SIB-APP.png";
import todos from "./images/Todos.png";
import animalia from "./images/Animalia.png";
import fungi from "./images/Fungi.png";
import plantae from "./images/Plantae.png";
import logoUni from "./images/logoUNTDF.jpg";
import { useState } from "react";
import { Edit, LocationOn, Person } from "@mui/icons-material";

export const Principal = () => {
  const [select, setSelect] = useState<string>("todos");

  const handleClick = (a: string) => {
    console.log("Se disparó: ", a);
    setSelect(a);
  };

  return (
    <>
      {/* Encabezado con botones */}
      <div className="contenedor-grid">
        <div className="item-grid">
          <img src={titulo} alt="titulo" />
        </div>

        <div className="item-grid guardaparque">
          <img src={guardaparque} alt="guardaparque" />
        </div>

        <div className="item-grid">
          <div
            className={`boton-wrapper ${select === "todos" ? "boton-wrapper-select" : ""
              }`}
          >
            <img
              src={todos}
              alt="Botón Todos"
              className="boton-imagen"
              onClick={() => handleClick("todos")}
            />
          </div>
        </div>

        <div className="item-grid">
          <div
            className={`boton-wrapper ${select === "animalia" ? "boton-wrapper-select" : ""
              }`}
          >
            <img
              src={animalia}
              alt="Botón Animalia"
              className="boton-imagen"
              onClick={() => handleClick("animalia")}
            />
          </div>
        </div>

        <div className="item-grid">
          <div
            className={`boton-wrapper ${select === "fungi" ? "boton-wrapper-select" : ""
              }`}
          >
            <img
              src={fungi}
              alt="Botón Fungi"
              className="boton-imagen"
              onClick={() => handleClick("fungi")}
            />
          </div>
        </div>

        <div className="item-grid">
          <div
            className={`boton-wrapper ${select === "plantae" ? "boton-wrapper-select" : ""
              }`}
          >
            <img
              src={plantae}
              alt="Botón Plantae"
              className="boton-imagen"
              onClick={() => handleClick("plantae")}
            />
          </div>
        </div>
      </div>

      {/* Título */}
      <div className="titulo">
        <h1>AVISTAJES EN</h1>
        <h1>PARQUES NACIONALES</h1>
        <img src={fotoCelu} alt="decoración" className="decoracion" />
      </div>

      {/* Tarjetas */}
      <div className="tarjeta">
        <div className="tarjeta-filtro"> filtro</div>
        <div className="tarjeta-contenido">contenido</div>
      </div>

      {/* Pie de página */}
      <div className="pie-grid">
        <div className="pie">
          {/* <img src={logoUni} alt="logoUni" /> */}
        </div>
        <div className="pie">
          <Person /> Orescovich Luis
        </div>
        <div className="pie">
          <LocationOn />
          Ushuaia UNTDF
        </div>
        <div className="pie">
          <Edit /> Laboratorio de Software
        </div>
      </div>
    </>
  );
};
