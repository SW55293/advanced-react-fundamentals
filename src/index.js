import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './Router/Nested-Routes/App'
import './Router/Nested-Routes/styles.css'


ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
)