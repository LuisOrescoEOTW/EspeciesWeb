import "./Principal.css"; // Estilos
import fotoCelu from "./images/fotoCelu.svg";
import guardaparque from "./images/sombrero.png";
import titulo from "./images/SIB-APP.png";
import todos from "./images/Todos.png";
import animalia from "./images/Animalia.png";
import fungi from "./images/Fungi.png";
import plantae from "./images/Plantae.png";
// import logoUni from "./images/logoUNTDF.jpg";
import { useEffect, useState } from "react";
import { Edit, LocationOn, Person } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";
import { getEspecies, getEspeciesByReinoTodos } from "./redux/slices/especies/especiesThunks";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { getReportes } from "./redux/slices/reportes/reportesThunks";

export const Principal = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Lista de Especies
  const { especies = [] } = useSelector((state: RootState) => state.especies);
  useEffect(() => {
    console.log(especies);
  }, [especies])

  // Lista de Reportes
  const { reportes = [] } = useSelector((state: RootState) => state.reportes);
  useEffect(() => {
    console.log(reportes);
  }, [reportes])


  //General al inicio trae todas las especies
  useEffect(() => {
    dispatch(getEspecies());
    dispatch(getReportes());
  }, [])


  // Selecciono Contenido de Especies
  const [select, setSelect] = useState<string>("TODOS");

  const handleClick = (a: string) => {
    console.log("Se disparó: ", a);
    setSelect(a);
    dispatch(getEspeciesByReinoTodos(a));
  };

  // Selecciono Filtro Especies o Reportes
  const [value, setValue] = useState("especies");
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
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
            className={`boton-wrapper ${select === "TODOS" ? "boton-wrapper-select" : ""
              }`}
          >
            <img
              src={todos}
              alt="Botón Todos"
              className="boton-imagen"
              onClick={() => handleClick("TODOS")}
            />
          </div>
        </div>

        <div className="item-grid">
          <div
            className={`boton-wrapper ${select === "ANIMALIA" ? "boton-wrapper-select" : ""
              }`}
          >
            <img
              src={animalia}
              alt="Botón Animalia"
              className="boton-imagen"
              onClick={() => handleClick("ANIMALIA")}
            />
          </div>
        </div>

        <div className="item-grid">
          <div
            className={`boton-wrapper ${select === "FUNGI" ? "boton-wrapper-select" : ""
              }`}
          >
            <img
              src={fungi}
              alt="Botón Fungi"
              className="boton-imagen"
              onClick={() => handleClick("FUNGI")}
            />
          </div>
        </div>

        <div className="item-grid">
          <div
            className={`boton-wrapper ${select === "PLANTAE" ? "boton-wrapper-select" : ""
              }`}
          >
            <img
              src={plantae}
              alt="Botón Plantae"
              className="boton-imagen"
              onClick={() => handleClick("PLANTAE")}
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
        {/* Filtro */}
        <div className="tarjeta-filtro">
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="especies" control={<Radio />} label="Especies" />
            <FormControlLabel value="reportes" control={<Radio />} label="Reportes" />
          </RadioGroup>

        </div>

        {/* Contenido */}
        {especies && reportes &&
          <div className="tarjeta-contenido">
            <p></p>
            Filtro: {value}
            <p></p>
            Especie: {select}
            <p></p>
            Total de registros Especie: {especies.length}
            {/* Reportes */}
            <p></p>
            Total de registros Reportes: {reportes.length}
            {reportes.map(x => {
              return <div key={x.id}>
                <li>Id: {x.especie.sp_id}</li>
                <li>Nombre Científico: {x.especie.nombre_cientifico}</li>
              </div>
            })}

          </div>
        }
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
