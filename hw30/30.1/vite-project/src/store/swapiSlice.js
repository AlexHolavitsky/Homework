
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk для получения данных по указанному персонажу
export const fetchCharacter = createAsyncThunk(
  'swapi/fetchCharacter',
  async (characterId) => {
    const response = await fetch(`https://swapi.py4e.com/api/people/${characterId}/`);
    const data = await response.json();
    return data;
  }
);

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: {
    character: null,
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.character = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default swapiSlice.reducer;
