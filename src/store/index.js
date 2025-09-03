import { configureStore } from '@reduxjs/toolkit';
import projectSlice from './slices/home';

const store = configureStore({
  reducer: {
    projects: projectSlice
  }
});

export default store;
