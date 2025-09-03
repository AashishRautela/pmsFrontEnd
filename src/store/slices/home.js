import API from '@/helpers/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Thunk to fetch projects
export const getProjects = createAsyncThunk(
  'data/projects',
  async (payload, thunkAPI) => {
    try {
      const response = await API.apiGet('projects', payload);
      return response.data; // return only the data
    } catch (error) {
      console.error('❌ Error fetching projects:', error);
      return thunkAPI.rejectWithValue(
        error.message || 'Failed to fetch projects'
      );
    }
  }
);

// Initial state
const initialState = {
  loading: false,
  projects: [],
  error: null
};

// Slice
export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // project list
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default projectSlice.reducer;
