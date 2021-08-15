import React from 'react'
import Button from './Context-Provider/Button'
import Header from './Context-Provider/Header'
import './Context-Provider/styles.css'

import {ThemeContextConsumer} from './themeContext'



const App = () => {
	return (
		<div>
			<Header />
			<ThemeContextConsumer>
				{theme => (
					<Button theme={theme}/>
				)}
			</ThemeContextConsumer>
			<Button theme="light"/>

		

		</div>
	)

}
export default App


/*
import UserNameContext from './userNameContext'
import Username from './Context-Provider/Username'
	<UserNameContext.Consumer>
				{name => {
					<Username name={"Stephanie"}></Username>
				}}
			</UserNameContext.Consumer>
			

*/