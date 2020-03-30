import {
  GET_ALL_BOOKS,
  GET_ALL_BOOKS_SUCCESS,
  GET_ALL_BOOKS_ERROR,

  GET_BOOKS_DETAIL, 
  GET_BOOKS_DETAIL_SUCCESS,
  GET_BOOKS_DETAIL_ERROR,

  UPDATE_BOOKS,
  UPDATE_BOOKS_SUCCESS,
  UPDATE_BOOKS_ERROR,

  ADD_BOOKS,
  ADD_BOOKS_SUCCESS,
  ADD_BOOKS_ERROR,

  DELETE_BOOKS,
  DELETE_BOOKS_SUCCESS,
  DELETE_BOOKS_ERROR
} from "../actions/books.js" ;

export function getAllBooks(state = {data: [], loading: false}, action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        data : [],
        loading: true
      };
    case GET_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_ALL_BOOKS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getBooksDetail(state = {data: [], loading: false}, action) {
    switch (action.type) {
      case GET_BOOKS_DETAIL:
        return {
          ...state,
          data: null,
          loading: true
        };
      case GET_BOOKS_DETAIL_SUCCESS:
        return {
          ...state,
          data: action.data,
          loading: false
        };
      case GET_BOOKS_DETAIL_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }

  export function updateBooks(state = {data: [], loading: false}, action) {
    switch (action.type) {
      case UPDATE_BOOKS:
        return {
          ...state,
          //data: [],
          loading: true
        };
      case UPDATE_BOOKS_SUCCESS:
        return {
          ...state,
          data: action.data,
          loading: false
        };
      case UPDATE_BOOKS_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }

  export function addBooks(state = {data: [], loading: false}, action) {
    switch (action.type) {
      case ADD_BOOKS:
        return {
          ...state,
          // data: null,
          loading: true
        };
      case ADD_BOOKS_SUCCESS:
        return {
          ...state,
          data: action.data,
          loading: false
        };
      case ADD_BOOKS_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }

  export function deleteBooks(state = {data: null, loading: false}, action) {
    switch (action.type) {
      case DELETE_BOOKS:
        return {
          ...state,
          data: [],
          loading: true
        };
      case DELETE_BOOKS_SUCCESS:
        return {
          ...state, 
          data: action.data,
          loading: false
        };
      case DELETE_BOOKS_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }