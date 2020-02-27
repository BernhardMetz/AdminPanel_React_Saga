import { all, takeEvery, put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import { login, logout } from 'services/api'
import actions from './actions'

export function* LOGIN({ payload }) {
  const { email, password } = payload
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })

  try {
    const response = yield call(login, email, password)
    console.log(response)
    if (response.data.success) {
      if (response.data.data.is_admin) {
        notification.success({
          message: 'Logged In',
          description: 'You have successfully logged in!',
        })

        yield put({
          type: 'user/SET_STATE',
          payload: {
            name: 'Admin',
            role: 'admin',
            authorized: true,
            token: response.data.data.token,
          },
        })
      } else {
        notification.success({
          message: 'Logged Rejected',
          description: 'You do not have admin priviledge',
        })

        yield put({
          type: 'user/SET_STATE',
          payload: {
            authorized: false,
            error: 'You do not have admin priviledge',
          },
        })
      }
    } else {
      notification.warning({
        message: 'Login failed',
        description: response.data.errmsg,
      })

      yield put({
        type: 'user/SET_STATE',
        payload: {
          authorized: false,
          error: response.data.errmsg,
        },
      })
    }
  } catch (ex) {
    notification.warning({
      message: 'Login failed',
      description: ex.message,
    })

    yield put({
      type: 'user/SET_STATE',
      payload: {
        error: ex.message,
      },
    })
  }

  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  yield call(logout)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      role: '',
      email: '',
      avatar: '',
      authorized: false,
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([takeEvery(actions.LOGIN, LOGIN), takeEvery(actions.LOGOUT, LOGOUT)])
}
