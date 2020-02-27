import { all, takeEvery, put, call } from 'redux-saga/effects'
import { getUserList, getUserAcct } from 'services/api'
import { types } from './actions'

export function* GET_USER_LIST() {
    yield put({
        type: types.SET_STATE,
        payload: {
            loading: true
        }
    });

    const response = yield call(getUserList);
    if (response) {
      yield put({
        type: types.SET_STATE,
        payload: {
            users: response.data
        }
      });
    }
  
    yield put({
      type: types.SET_STATE,
      payload: {
        loading: false
      }
    });
}

export function* GET_USER_ACCT({email}) {
    yield put({
      type: types.SET_STATE,
      payload: {
        loading: true
      }
    });
  
    const response = yield call(getUserAcct, [email]);
    if (response) {
      yield put({
        type: types.SET_STATE,
        payload: {
            status: response.data
        }
      });
    }
  
    yield put({
      type: types.SET_STATE,
      payload: {
        loading: false
      }
    });
  }
    
  export default function* rootSaga() {
    yield all([
      takeEvery(types.GET_USER_LIST, GET_USER_LIST),
      takeEvery(types.GET_USER_ACCT, GET_USER_ACCT)
    ]);
  }
  