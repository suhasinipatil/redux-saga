import { put, call, take, takeEvery } from 'redux-saga/effects';
import { setProducts } from './action';
import { FETCH_PRODUCTS } from './actionTypes';
//import data from './data.json';

export function* fetchProducts() {
    const response = yield call(fetch, 'http://127.0.0.1:8000/api/data.json/');
    const data = yield call([response, 'json'])

    if (response.ok) {
        yield put(setProducts(data.products));
    }
    else {
        console.error('Error fetching products');
    }
}

export function* watchFetchProducts() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
