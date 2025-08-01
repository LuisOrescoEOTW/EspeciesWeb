import { Api } from "../../../api/Api";
import type { AppDispatch } from "../../store";
import { setEspecies } from "./especiesSlice";

//Especies Todas
export const getEspecies = () => {
  return async (dispatch: AppDispatch) => {
    const { data } = await(Api.get(`/especies/GetAll`));
    dispatch(setEspecies({ especies: data}));
  };
};

//Especies Filtro por Reino
export const getEspeciesByReino = (reino: string) => {
  return async (dispatch: AppDispatch) => {
    const { data } = await(Api.get(`/especies/GetByReino/${reino}`));
    dispatch(setEspecies({ especies: data}));
  };
};

//Especies Filtro por Reino y Todos
export const getEspeciesByReinoTodos = (reino: string) => {
  return async (dispatch: AppDispatch) => {
    const { data } = await(Api.get(`/especies/GetByReinoTodos/${reino}`));
    dispatch(setEspecies({ especies: data}));
  };
};
