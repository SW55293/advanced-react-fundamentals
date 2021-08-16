import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
	state = {
		theme: "dark",
		name: "Stephanie"
	}

	toggleTheme = () => {
		this.setState(prevState => {
			return {
				theme: prevState.theme === "light" ? "dark" : "light"
			}
		})
	}
	 render() {
		 return (
			 <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme, name: this.state.name}} >
				 {this.props.children}
				 {/* <button onClick={this.toggleTheme} >Switch the theme</button> */}
			 </Provider>
		 )
	 }
}


export {ThemeContextProvider, Consumer as ThemeContextConsumer}





/*
Version 1, the first draft of the code before I changed it
=============
 import React from 'react'



//this will be passed to React-Context folder
const ThemeContext = React.createContext()
//it passes props to any chld you choose
//you use ThemeContext.Provider & ThemeContext.Consumer

export default ThemeContext
*/