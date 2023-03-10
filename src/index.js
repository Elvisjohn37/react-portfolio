import React from 'react'
import * as ReactDOM from 'react-dom/client'
import AppRoute from 'src/AppRoute'
import store from 'src/redux/store'
import { Provider } from 'react-redux'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <AppRoute />
    </Provider>
)
