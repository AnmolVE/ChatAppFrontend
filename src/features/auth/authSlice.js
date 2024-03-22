import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginUrl = "http://127.0.0.1:8000/api/login/";

const initialState = {
  authTokens: localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens"))
    : null,
  isLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    if (userData.email === "" || userData.password === "") {
      return rejectWithValue("Please fill in all fields");
    }
    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        return rejectWithValue("Invalid credentials");
      }
      const responseData = await response.json();
      console.log(responseData);
      return responseData;
    } catch (error) {
      throw new Error("something went wrong");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const access = action.payload.tokens.access;
        state.authTokens = access;
        localStorage.setItem("tokens", JSON.stringify(access));
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default authSlice.reducer;
