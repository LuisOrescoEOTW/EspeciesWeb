import { createSlice } from '@reduxjs/toolkit'
import type { Iespecies } from '../../../app/Models/Iespecies';

export const especiesSlice = createSlice({
  name: 'especies',
  initialState: {
    especies: Array<Iespecies>(),
  },
  reducers: {
    setEspecies: (state, action) => {
      state.especies = action.payload.especies;
    },
  },
})

export const { setEspecies } = especiesSlice.actions
