import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import ThemeContext from './React-Context/themeContext'


ReactDOM.render(
	<ThemeContext.Provider value={"Stephanie"}>
	<App />
	</ThemeContext.Provider>,
	//  <ThemeContext.Provider value={"light"}>
	// <App />
	// </ThemeContext.Provider>,
	document.getElementById("root")
)


//you wrap the main/parent component with the provider tag and you wrap
//the child components that will use certain props with the Consumer tag
//the <ThemeContext.Provider value={""}> always has to have a value 