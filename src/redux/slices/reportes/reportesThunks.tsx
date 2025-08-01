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
