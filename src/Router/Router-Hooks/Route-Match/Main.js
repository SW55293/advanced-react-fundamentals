import React from 'react'
import Header from '../../Nested-Routes/components/Header'
import Footer from '../../Nested-Routes/components/Footer'
import Home from '../../Nested-Routes/Pages/Home'
import Profile from '../../Nested-Routes/Pages/Profile'

import {Link, Switch, Route, useRouteMatch } from 'react-router-dom'

function Main() {
	const {path, url} = useRouteMatch()
	
	return (
		<div>
			<h1>Profile Page</h1>
            <ul>
                <li><Link to={`${url}/`}>Profile Info</Link></li>
                <li><Link to={`${url}/profile`}>Profile Settings</Link></li>
              
            </ul>
			<Header />
			<Switch>
				<Route exact path="/"> <Home /> </Route>
				<Route path={`${path}/profile`}> <Profile /> </Route>
			</Switch>
			<Footer />
		</div>
	)
}
export default Main