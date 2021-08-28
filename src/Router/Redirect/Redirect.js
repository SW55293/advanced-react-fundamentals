import React, {useState} from 'react'
import {Link, Switch, Route, Redirect} from 'react-router-dom'

function Redir() {
	
	const [isLoggedIn, setLoggedIn] = useState(false)
	// we set the log in to false so this hardcodes the state as not logged in
	return(
		<div>
			<Link to="/">Home </Link>
			<Link to="/checkout">Checkout </Link>

			<Switch>
				<Route exact path="/"> <h1>Home page and visible to all</h1></Route>
				{/* if user is logge in then show page if not they cannot see */}

				<Route path="/checkout">
					{
						isLoggedIn ? 
						<h1>Checkout page not visible to all until you sign in</h1> :
						<Redirect to="/signin"/>
				}
				</Route>

			</Switch>
			
		</div>
	)
}

export default Redir
//Redirect is usually used in more complex applications