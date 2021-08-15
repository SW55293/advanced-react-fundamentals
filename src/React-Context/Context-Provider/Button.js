import React from 'react'
import ThemeContext from '../themeContext'

function Button(props) {

	return (
		<div>
			<ThemeContext.Consumer>
				{theme => (
					<button className={`${theme}-theme`}>Switch Theme</button>
				)}
			</ThemeContext.Consumer>

		</div>



	)
}


export default Button