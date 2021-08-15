import React from 'react'
import {ThemeContextConsumer} from '../themeContext'

function Header (props) {
    
        return (
			
			<div>
				<ThemeContextConsumer>
					{(theme, name) => (
						<header className={`${theme}-theme`}>
						<h2>{theme === "light" ? "Light Theme" : "Dark Theme"}</h2>
						
						<h3 className="h3-tag">Welcome Back, {`${name}`}</h3>
						<h3 className="h3-tag">Welcome Back, {name}</h3>
					</header>

					)}
				

				
			</ThemeContextConsumer>
			
			</div>
			
        )    
    
}


export default Header
