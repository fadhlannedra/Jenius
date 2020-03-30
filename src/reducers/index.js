import {combineReducers} from 'redux';
import count from './count.js';
import {getAllBooks, getBooksDetail, updateBooks, addBooks, deleteBooks} from "./books";

//import di tambahain deleteBook




const allReducers= combineReducers({
  count,
  books: getAllBooks,
  detail: getBooksDetail,
  updateBooks: updateBooks,
  addBooks: addBooks,
  deleteBooks: deleteBooks,
  
  // delete: deleteBooks
});
export default allReducers;