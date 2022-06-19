const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddleware = require("redux-thunk").default;
const applayMiddleware = redux.applyMiddleware;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESSED = "FETCH_USERS_SUCCESSED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESSED,
    payload: users,
  };
};

const fetchUsersFalur = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESSED:
      return {
        ...state,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUsersFalur(err.message));
      });
  };
};
const store = createStore(reducer, applayMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
