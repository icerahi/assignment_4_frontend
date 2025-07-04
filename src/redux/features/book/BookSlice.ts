import type { RootState } from "@/redux/store";
import type { IBook } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  bookDetailsModalOpen: boolean;
  selectedBook: IBook | null;
}

const initialState: IInitialState = {
  bookDetailsModalOpen: false,
  selectedBook: null,
};
const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    showBookDetails: (state, action) => {
      state.bookDetailsModalOpen = true;
      state.selectedBook = action.payload;
    },
    closeBookDetails: (state) => {
      state.bookDetailsModalOpen = false;
      state.selectedBook = null;
    },
  },
});

export const { showBookDetails, closeBookDetails } = BookSlice.actions;

export const selectBook = (state: RootState) => state.book;

export default BookSlice.reducer;
