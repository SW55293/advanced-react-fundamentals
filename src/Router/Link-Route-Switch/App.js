import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Profile from './Profile'

function App() {
	return (
		<div>
			<nav>
			<Link to="/">Home Page</Link>
			<Link to="/about">About Page</Link>
			<Link to="/profile">Profile Page</Link>
			</nav>

			<Switch>
				<Route exact path="/"> <Home /> </Route>
				<Route path="/about"> <About /> </Route>
				<Route path="/profile"> <Profile /> </Route>
			</Switch>
			
		</div>
	)

}

export default App



/*
one way to pass components in the route
use the below if you need to pass props

----Version 1
<Route exact path="/" render={() => <Home />} />
<Route path="/about" render={() => <About />} />
<Route path="/profile" render={() => <Profile />} />

----Version 2
<Route exact path="/" component={Home} />
<Route path="/about" component={About} />
<Route path="/profile" component={Profile} />

----Version 3
<Route exact path="/"> <Home /> </Route>
<Route path="/about"> <About /> </Route>
<Route path="/profile"> <Profile /> </Route>



*/