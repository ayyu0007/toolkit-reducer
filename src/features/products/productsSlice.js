import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  searchQuery: '',
  currentPage: 1,
  pageSize: 3,
  sortDescending: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    toggleSort(state) {
      state.sortDescending = !state.sortDescending;
    },
    // other CRUD operations and actions...
  },
});

export const { addProduct, removeProduct, setSearchQuery, setCurrentPage, toggleSort } = productsSlice.actions;

export default productsSlice.reducer;
