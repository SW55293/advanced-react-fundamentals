import React from 'react'
import {ThemeContextConsumer} from '../themeContext'

class Username extends React.Component {
	state = {
		newUsername: ""
	}

	
	handleChange = (e) => {
		const {name, value} = e.target
		this.setState({[name]: value})
	}

	  render() {
        return (
			
				<ThemeContextConsumer>
				{({username, changeUsername}) => (
					<div>
					<h1>Welcome back, {username}</h1>
					
				<h4>Change your Username</h4>
				<input
					type="text"
					name="newUsername"
					placeholder="USername"
					value={this.state.newUsername}
					onChange={this.handleChange}
				/>
				<button onClick={() => changeUsername(this.state.newUsername)}>Change Username</button>
				</div>
				)}
				</ThemeContextConsumer>
				
			
			
        )  
		}  
    
}


export default Username
/*

//This page wont render unless you insert the hard coded name somewhere. The way I 
//did the other ones was to hard code it into the index.js file 

	//  <ThemeContext.Provider value={"Stephanie"}>
	// <App />
	// </ThemeContext.Provider>,
 <UserNameContext.Consumer>
					{name => (
						<p>Welcome back, {name} </p>

					)}
            
			</UserNameContext.Consumer> 


*/