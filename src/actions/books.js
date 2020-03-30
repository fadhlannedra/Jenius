export const GET_ALL_BOOKS = "GET_ALL_BOOKS";
export const GET_ALL_BOOKS_SUCCESS = "GET_ALL_BOOKS_SUCCESS";
export const GET_ALL_BOOKS_ERROR = "GET_ALL_BOOKS_ERROR";

export const GET_BOOKS_DETAIL = "GET_BOOKS_DETAIL";
export const GET_BOOKS_DETAIL_SUCCESS = "GET_BOOK_DETAIL_SUCCESS";
export const GET_BOOKS_DETAIL_ERROR = "GET_BOOK_DETAIL_ERROR";

export const UPDATE_BOOKS = " UPDATE_BOOK";
export const UPDATE_BOOKS_SUCCESS = "UPDATE_BOOK_SUCCES";
export const UPDATE_BOOKS_ERROR = "UPDATE_BOOK_ERROR";

export const ADD_BOOKS = "ADD_BOOKS";
export const ADD_BOOKS_SUCCESS = "ADD_BOOKS_SUCCES";
export const ADD_BOOKS_ERROR = "ADD_BOOS_ERROR";

export const DELETE_BOOKS = "DELETE_BOOKS";
export const DELETE_BOOKS_SUCCESS = "DELETE_BOOKS_SUCCESS";
export const DELETE_BOOKS_ERROR = "DELETE_BOOKS_ERROR";

export function getAllBooks() {
    return {
        type: GET_ALL_BOOKS
    };
}

export function getBooksDetail(id) {
    return {
        id: id,
        type: GET_BOOKS_DETAIL
    };
}

export function updateBooks(id, data) {
    return {
        type: UPDATE_BOOKS,
        id: id,
        data: data
    };
}

export function addBooks(data) {
    return {
        type: ADD_BOOKS,
        data: data
    }
}

export function deleteBooks(id) {
    return {
        type: DELETE_BOOKS,
        id: id
    };
}