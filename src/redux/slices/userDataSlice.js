import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  users: [
    {
      title: 'Ant Design Title 1',
      email: 'blabla@bla.boo',
    },
    {
      title: 'Ant Design Title 2',
      email: 'blabla@bla.boo',
    },
    {
      title: 'Ant Design Title 3',
      email: 'blabla@bla.boo',
    },
    {
      title: 'Ant Design Title 4',
      email: 'blabla@bla.boo',
    },
  ],
};
export const usersSlice = createSlice({
  name: 'users_data',
  initialState,
  reducers:{}
})

export default usersSlice.reducer