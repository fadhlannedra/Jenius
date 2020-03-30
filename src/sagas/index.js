import {all, fork} from "redux-saga/effects";
import {watchGetAllBooks, watchGetBooksDetail, watchupdateBooks, watchaddBooks, watchdeleteBooks} from "./books.js";
//tambahin import deleteBooks
export default function* sagas(){
    yield all ([
        fork(watchGetAllBooks),
        fork(watchGetBooksDetail),
        fork(watchupdateBooks),
        fork(watchaddBooks),
        fork(watchdeleteBooks)
        
        
        
    ]);
}
