import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {HashRouter as Router} from 'react-router-dom'
import { SocketContext, socket } from './context/socket'
import App from './App'
import store from './store'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <SocketContext.Provider value={socket}>
            <Router>
                <App />
            </Router>
        </SocketContext.Provider>
    </Provider>
)