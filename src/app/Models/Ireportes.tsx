import type { Iespecies } from "./Iespecies";

export interface Ireportes {
  id: number; 
  latitud: number;
  longitud: number;
  fecha: string;
  hora: string;
  descripcion: string;
  imagen: string;
  especie: Iespecies;
}