import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchHotels(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:5000/hotels', action.payload);
    yield put({ type: 'FETCH_HOTELS_SUCCESS', payload: response.data });
  } catch (e) {
    console.error('Ошибка:', e);
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_HOTELS_REQUEST', fetchHotels);
}

export default rootSaga;
