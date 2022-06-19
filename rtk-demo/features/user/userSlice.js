const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Generates pending ,fulfilled and rejected action types , we can listen to these action types with a reducer function adn perform
// necessary state transitions
//but the reducers are not generated by the slice and have to be added by and extra reducers
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  //payload
  // first parameter is the action name
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      response.data.map((user) => user.id);
    });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "3ash";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;