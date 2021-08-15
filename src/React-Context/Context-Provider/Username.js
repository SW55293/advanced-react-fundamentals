import React from 'react'
//import UserNameContext from '../userNameContext'

function Username (props) {
	  
        return (
			<div>
				<p>Welcome back, {props.name}</p>
			</div>
			
        )    
    
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