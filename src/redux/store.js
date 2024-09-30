import { configureStore } from '@reduxjs/toolkit';
import usersReduser from './slices/userDataSlice';
export const store = configureStore({
  reducer: { users_data: usersReduser },
});
