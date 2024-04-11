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

// Define a type for the slice state
interface IAuthState {
  name: string;
  email: string;
  authenticated: boolean;
  token: string;
  userType?: string;
  errors: unknown;
}

// Define the initial state using that type
const initialState: IAuthState = {
  name: '',
  email: '',
  authenticated: false,
  token: '',
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
        state.name = action.payload.data.name;
        state.email = action.payload.data.email;
      })
      .addCase(login.rejected, (state) => {
        state.authenticated = false;
        state.token = '';
        state.name = '';
        state.email = '';
      });
  },
});

export const { reducer: authReducer } = authSlice;
