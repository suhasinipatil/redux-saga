import { put, call, take, takeEvery } from 'redux-saga/effects';
import { setProducts } from './action';
import { FETCH_PRODUCTS } from './actionTypes';
import data from './data.json';

export function* fetchProducts() {
    const response = yield call(() => data);
    yield put(setProducts(response.products));
}

export function* watchFetchProducts() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
