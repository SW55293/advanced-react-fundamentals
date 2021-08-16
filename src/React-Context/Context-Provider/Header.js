import React from 'react'
import {ThemeContextConsumer} from '../themeContext'

function Header (props) {
    
        return (
			
			<div>
				<ThemeContextConsumer>
					{context => (
						<header className={`${context.theme}-theme`}>
						<h2>{context.theme === "light" ? "Light Theme" : "Dark Theme"}</h2>
						
						{/* Both ways work to pass name */}
						<h3 className="h3-tag">Welcome Back, {`${context.name}`}</h3>
						<h3 className="h3-tag">Welcome Back, {context.name}</h3>
					</header>

					)}
				

				
			</ThemeContextConsumer>
			
			</div>
			
        )    
    
}


export default Header
