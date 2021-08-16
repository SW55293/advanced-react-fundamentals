import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
	state = {
		theme: "dark",
		placeholder: "User",
		username: "bb"
	}

	toggleTheme = () => {
		this.setState(prevState => {
			return {
				theme: prevState.theme === "light" ? "dark" : "light"
			}
		})
	}

	changeUsername = (username) => {
		this.setState({username})
	}
	 render() {
		 return (
			 <Provider value={{
				 theme: this.state.theme,
				  toggleTheme: this.toggleTheme,
				   placeholder: this.state.placeholder,
				    username: this.state.username,
					 changeUsername: this.changeUsername
				   }} >
				
				 {/* <button onClick={this.toggleTheme} >Switch the theme</button> */}
				
					{this.props.children}
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