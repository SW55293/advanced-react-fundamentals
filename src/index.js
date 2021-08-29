import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import './Router/Nested-Routes/styles.css'
//import App from './Router/Nested-Routes/App'
//import App from './Router/Router-Hooks/useHistoryandLocation/App'
//import App from './Router/Redirect/Redirect'
import App from './Router/Section-Challenge/App'

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
)