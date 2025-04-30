import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: {},
    accessToken: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Action to update user details
        userDetails: (state, action) => {
            state.userDetails = action.payload;
        },

        // Action to reset user state (used for logout)
        resetUser: (state) => {
            state.userDetails = {};  // Clear user details
            state.accessToken = null;  // Clear access token
        },

        // Action to set access token (if applicable)
        accessToken: (state, action) => {
            state.accessToken = action.payload;
        },
    },
});

// Export actions and reducer
export const { userDetails, resetUser, accessToken } = userSlice.actions;
export default userSlice.reducer;
