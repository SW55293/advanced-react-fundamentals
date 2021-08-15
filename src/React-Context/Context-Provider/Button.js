import React from 'react'
import PropTypes from 'prop-types'
//import ThemeContext from '../themeContext'

function Button(props) {

	return (
		<div>
			{/* Commented the below out because I dont want to add the Theme context to it
			If I want to change it jsut un-comment */}
			{/* <ThemeContext.Consumer>
				{theme => (
					<button className={`${theme}-theme`}>Switch Theme</button>
				)}
			</ThemeContext.Consumer> */}
			<button className={`${props.theme}-theme`}>Switch Theme</button>

		</div>



	)
}

Button.propTypes = {
	theme: PropTypes.oneOf(["light", "dark"])
}


export default Button