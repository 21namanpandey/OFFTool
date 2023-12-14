import { createSlice, nanoid } from '@reduxjs/toolkit';



const initialState = {
    todos: [{ id: 1, text: "Achieve your goals !!", updateMode: false }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload[0]) {
                    todo.text = action.payload[1];
                }
            });
        },


        toggleUpdateMode: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.updateMode = !todo.updateMode;
                }
            });

            state.updateTodoId = action.payload;
        },
    }
})

export const { addTodo, removeTodo, updateTodo, toggleUpdateMode } = todoSlice.actions

export default todoSlice.reducer