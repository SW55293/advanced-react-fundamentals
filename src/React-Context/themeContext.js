import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
	 render() {
		 return (
			 <Provider value={"dark"} name={"Stephanie"}>
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