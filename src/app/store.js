import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../components/functions/Todo/TodoSlice';

export const store = configureStore({
    reducer: todoReducer,
});