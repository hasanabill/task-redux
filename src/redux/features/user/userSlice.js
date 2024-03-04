import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "Anabil",
    email: "anabil@mail.com",
    userTasks: [],
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.users.push(payload)
        }
    }
})

export const { addUser } = userSlice.actions;

export default userSlice.reducer;