import React from 'react'
import PropTypes from 'prop-types'
//import ThemeContext from '../themeContext'
import {ThemeContextConsumer} from '../themeContext'

function Button(props) {

	return (
		<div>
			{/* Commented the below out because I dont want to add the Theme context to it
			If I want to change it just un-comment */}
			<ThemeContextConsumer>
				{context => (
					<button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch</button>
				)}
			</ThemeContextConsumer>
			

		</div>



	)
}
//you are only able to choose from light or dark
//if you try putting in another value you get an error
Button.propTypes = {
	theme: PropTypes.oneOf(["light", "dark"])
}


export default Button