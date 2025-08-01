import type { Iespecies } from "./Iespecies";

export interface Ireportes {
  id: number; 
  latitud: number;
  longitud: number;
  fecha: String;
  hora: String;
  descripcion: String;
  imagen: String;
  especie: Iespecies;
}