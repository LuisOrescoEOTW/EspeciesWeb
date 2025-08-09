import { Api } from "../../../api/Api";
import type { AppDispatch } from "../../store";
import { setReportes } from "./reportesSlice";

//Reportes Todos
export const getReportes = () => {
  return async (dispatch: AppDispatch) => {
    const { data } = await(Api.get(`/reportes/GetAll`));
    dispatch(setReportes({ reportes: data}));
  };
};

//Reportes Filtro por Reino y Todos
export const getReportesByReinoTodos = (reino: string) => {
  return async (dispatch: AppDispatch) => {
    const { data } = await(Api.get(`/reportes/GetByReinoTodos/${reino}`));
    dispatch(setReportes({ reportes: data}));
  };
};