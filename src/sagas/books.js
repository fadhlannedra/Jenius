import { put, takeLatest, actionChannel } from "redux-saga/effects";
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




 
} from "../actions/books.js";

import { filterFetch } from "../utils/apiUtil.js";


const delay = ms => new Promise(res => setTimeout(res, ms));

// const sampleData = [
//   {
//     id: 1,
//     title: "bootcamp",
//     author: "haha",
//     price: 20000,
//     stock: 100
//   },

//   { id: 2,
//     title: "bootcamp lagi",
//     author: "haha huhu",
//     price: 10000,
//     stock: 50 },

//   { id: 1,
//     title: "bootcamp unch",
//     author: "haha hihi",
//     price: 30000,
//     stock: 1 }
// ];

export function* getAllBooks() {
  
  try {
    yield delay(2000);

    const json = yield filterFetch(
      fetch("https://simple-contact-crud.herokuapp.com/contact")
    )
    yield put({
      type: GET_ALL_BOOKS_SUCCESS,
      data: json
    });
  } catch (error) {yield put({
      type: GET_ALL_BOOKS_ERROR,
      error: error
    });
  }
}

export function* getBooksDetail(action) {

  try {

    const json = yield filterFetch(
      fetch("https://simple-contact-crud.herokuapp.com/contact/" + action.id)
    )
    yield put({
      type: GET_BOOKS_DETAIL_SUCCESS,
      data: json
    });
  } catch (error) {
    yield put({
      type: GET_BOOKS_DETAIL_ERROR,
      error: error
    });
  }
}

export function* updateBooks(action) {

  try {

    const json = yield filterFetch(
      fetch("https://simple-contact-crud.herokuapp.com/contact" + action.data.book_id, {
      
       method: "PUT",
       headers: {"content-type": "application/json"},
       body: JSON.stringify(action.data)

    })
    )
    
    yield put({
      type: UPDATE_BOOKS_SUCCESS,
      data: json
    });
  } catch (error) {
    yield put({
      type: UPDATE_BOOKS_ERROR,
      error: error
    });
  }
}

export function* addBooks(action) {
  try {

    const json = yield filterFetch(
      fetch("https://simple-contact-crud.herokuapp.com/contact", {
      
       method: "POST",
       headers: {"content-type": "application/json"},
       body: JSON.stringify(action.data)

    })
    )
    
    yield put({
      type: ADD_BOOKS_SUCCESS,
      data: json
    });
  } catch (error) {
    yield put({
      type: ADD_BOOKS_ERROR,
      error: error
    });
  }
}

export function* deleteBooks(action) {

  console.log("haii" + action.id )

  try {

    const json = yield filterFetch(
      fetch("https://simple-contact-crud.herokuapp.com/contact/" + action.id, {
        method: "DELETE",
        // data: json
      }
    ));
    console.log('sampe sini');
    yield put({
      type: DELETE_BOOKS_SUCCESS,
      data: json
    });
  } catch (error) {
    console.log('error kaga '+error);
    yield put({
      type: DELETE_BOOKS_ERROR,
      error: error
    });
  }
}




export function* watchGetAllBooks() {
  yield takeLatest(GET_ALL_BOOKS, getAllBooks);
}

export function* watchGetBooksDetail() {
  yield takeLatest(GET_BOOKS_DETAIL, getBooksDetail);
}

export function* watchupdateBooks() {
  yield takeLatest(UPDATE_BOOKS, updateBooks);
}

export function* watchaddBooks() {
  yield takeLatest(ADD_BOOKS, addBooks);
}

export function* watchdeleteBooks() {
  yield takeLatest(DELETE_BOOKS, deleteBooks); // untuk memanggil yang ada di action
}



