import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSwapiData = createAsyncThunk('swapi/fetchSwapiData', async () => {
  const response = await fetch('https://swapi.py4e.com/api/people/1/');
  return response.json();
});

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSwapiData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSwapiData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSwapiData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default swapiSlice.reducer;
