import { configureStore } from '@reduxjs/toolkit'
import { especiesSlice } from './slices/especies/especiesSlice'
import { reportesSlice } from './slices/reportes/reportesSlice'

export const store = configureStore({
  reducer: {
    especies: especiesSlice.reducer,
    reportes: reportesSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch