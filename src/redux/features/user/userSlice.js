import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "Sadman",
    email: "anabil@mail.com",
    userTasks: [],
}

const userSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.users.push(payload)
        }
    }
})

export const { addUser } = userSlice.actions;

export default userSlice.reducer;