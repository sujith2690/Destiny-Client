import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    books: [],
    myBooks: [],
    favBooks: []
}
const bookSlice = createSlice({
    name: 'bookSlice',
    initialState,
    reducers: {
        storeBooks: (state, action) => {
            state.books = action.payload
        },
        addNewBook: (state, action) => {
            state.books.unshift(action.payload),
                state.myBooks.unshift(action.payload)
        },
    }
})

export const { storeBooks,  addNewBook} = bookSlice.actions;
export default bookSlice.reducer;
