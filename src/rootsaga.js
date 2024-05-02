import { all } from 'redux-saga/effects';
import { watchFetchProducts } from './sagas';

function* rootSaga() {
    yield all([
        watchFetchProducts()
    ]);
}

export default rootSaga;