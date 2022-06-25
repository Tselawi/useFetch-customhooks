import axios from 'axios';
import { useReducer, useEffect } from 'react';

const ACTIONS = {
  API_REQUESTS: 'api_requests',
  FETCH_API: 'fetch_api',
  ERROR: 'error',
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.API_REQUESTS:
      return { ...state, data: [], loading: true };
    case ACTIONS.FETCH_API:
      return { ...state, data: payload.data, loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], error: payload };
    default:
      return state;
  }
}

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUESTS });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_API, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.ERROR, payload: err.error });
      });
  }, [url]);
  return state;
};

export default useFetch;
