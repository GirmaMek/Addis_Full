import appDataSlice from "./appDataSlice.js"
import {configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./rootSaga";
const sagaMiddleWare = createSagaMiddleWare();
export default configureStore({reducer:{appData:appDataSlice,},middleware:[sagaMiddleWare]});
sagaMiddleWare.run(rootSaga)
