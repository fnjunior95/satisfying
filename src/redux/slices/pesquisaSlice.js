import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pesquisas: [],
  pesquisaAtual: null,
};

const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState,
  reducers: {
    setPesquisas: (state, action) => {
      state.pesquisas = action.payload;
    },
    setPesquisaAtual: (state, action) => {
      state.pesquisaAtual = action.payload;
    },
    atualizarPesquisa: (state, action) => {
      const index = state.pesquisas.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.pesquisas[index] = action.payload;
        state.pesquisaAtual = action.payload;
      }
      console.log('Pesquisa atualizada:', action.payload);
    },
  },
});

export const { setPesquisas, setPesquisaAtual, atualizarPesquisa } = pesquisaSlice.actions;
export default pesquisaSlice.reducer;
