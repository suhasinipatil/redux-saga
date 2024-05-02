import { put, call, take, takeEvery } from 'redux-saga/effects';
import { setProducts } from './action';
import { FETCH_PRODUCTS } from './actionTypes';
import data from './data.json';

export function* fetchProducts() {
    console.log('fetchProducts');
    const info = yield call(() => data);
    console.log(info);
    yield put(setProducts(info.products));
}

export function* watchFetchProducts() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
