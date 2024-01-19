import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from 'api/auth';
import { ILoginData } from 'types';

export const login = createAsyncThunk(
  'auth/login',
  async (data: ILoginData, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
      // Throw the error response from the API
    }
  },
);

interface User {
  id: number;
  name: string;
  email: string;
}
// Define a type for the slice state
interface IAuthState {
  user: Partial<User>;
  authenticated: boolean;
  token: string;
  userType?: string;
  refreshToken: string;
  errors: unknown;
}

// Define the initial state using that type
const initialState: IAuthState = {
  user: {},
  authenticated: false,
  token: '',
  refreshToken: '',
  errors: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.authenticated = true;
        state.token = action.payload.data.token;
        state.refreshToken = action.payload.data.refreshToken;
        state.user = action.payload.data.user;
      })
      .addCase(login.rejected, (state) => {
        state.authenticated = false;
        state.token = '';
        state.refreshToken = '';
        state.user = {};
      });
  },
});

export const { reducer: authReducer } = authSlice;
