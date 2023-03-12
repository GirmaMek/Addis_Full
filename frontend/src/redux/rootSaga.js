import {call,all, fork,put,takeEvery, takeLatest, takeLeading} from "redux-saga/effects";
import api from "./api";
import { getGenersFetch, getGenersSuccess, getSongsError, getSongsFetch, getSongsSuccess, getStatsFetch, getStatsSuccess, setAddStart, setAddSuccess, setDeleteStart, setDeleteSuccess, setUpdateStart, setUpdateSuccess } from "./appDataSlice";
function* handleCall(callBack,...args){
  try{
     yield* callBack(...args);
  }catch(e){
      yield put(getSongsError(e.response.data));
  }
}

  function* handleGetReport(){
    yield* handleCall(function*(req){
      const stats = yield call(req);
      yield put(getStatsSuccess(stats.data));
    },api.getStats);
  }
  function* handleGetGenre(){
    yield* handleCall(function*(req){
      const geners = yield call(req);
      yield put(getGenersSuccess(geners.data));
    },api.getGeners);
  }
  function* handleUpdate({payload}){
    yield* handleCall(function*(req,id,body){
      const geners = yield call(req,id,body);
      yield put(setUpdateSuccess(geners.data));
    },api.updateSong,payload.id,payload.body);
    }
    function* handleDelete({payload}){
      yield* handleCall(function*(req,id){
        const stats = yield call(req,id);
        yield put(setDeleteSuccess({...stats.data,_id:payload.id}));
        yield put(getSongsFetch());
      },api.deleteSong,payload.id);
    }
    function* handleGetSong(){
      yield* handleCall(function*(req){
        const songs = yield call(req);
        yield put(getSongsSuccess(songs.data));
      },api.getSongs);
    }
    
    function* handleAdd({payload}){
      yield* handleCall(function*(req,body){
        const songs = yield call(req,body);
        yield put(setAddSuccess(songs.data));
      },api.addSong,payload.body);
    }
  function* onFetchStatsSaga(){
      yield takeLatest(getStatsFetch.type,handleGetReport)
  }
  function* onFetchSongSaga(){
    yield takeLatest(getSongsFetch.type,handleGetSong)
  }
  function* onFetchGenersSaga(){
    yield takeLatest(getGenersFetch.type,handleGetGenre)
  }
  function*  onAddStartSaga(){
    yield takeEvery(setAddStart.type,handleAdd)
  }
  function* onDeleteStartSaga(){
    yield takeEvery(setDeleteStart.type,handleDelete)
  }
  function*  onUpdateStart(){
    yield takeLeading(setUpdateStart.type,handleUpdate)
  }
function* rootSaga(){
    yield all([
        fork(onFetchSongSaga),
        fork(onUpdateStart),
        fork(onAddStartSaga),
        fork(onDeleteStartSaga),
        fork(onFetchGenersSaga),
        fork(onFetchStatsSaga)
    ])  
}
export default rootSaga;