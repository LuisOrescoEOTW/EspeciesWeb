import { createSlice } from '@reduxjs/toolkit'
import type { Ireportes } from '../../../app/Models/Ireportes';

export const reportesSlice = createSlice({
  name: 'reportes',
  initialState: {
    reportes: Array<Ireportes>(),
  },
  reducers: {
    setReportes: (state, action) => {
      state.reportes = action.payload.reportes;
    },
  },
})

export const { setReportes } = reportesSlice.actions
