import React, {Component} from 'react'
import ThemeContext from '../themeContext'

class Button extends Component {
    render() {
		//const theme = this.context
		const name = this.context
        return (
			<div>
            {/* <button className={`${theme}-theme`}>Switch Theme</button> */}
			<h2>No new notifications, {name}</h2>
			</div>
        )    
    }
}

Button.contextType = ThemeContext
export default Button