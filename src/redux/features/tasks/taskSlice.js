import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
}

const taskSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: 'pending', ...payload });
            } else {
                const lastId = state.tasks.at(-1).id;
                state.tasks.push({
                    id: lastId + 1,
                    status: 'pending',
                    ...payload
                });
            }
        },
        removeTask: (state, { payload }) => {
            state.tasks.filter((item) => item.id !== payload);
        }
    },
})

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;