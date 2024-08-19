import { configureStore } from '@reduxjs/toolkit';
import pesquisaReducer from './slices/pesquisaSlice';

const store = configureStore({
  reducer: {
    pesquisa: pesquisaReducer,
  },
});

export default store;
