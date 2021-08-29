import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import ProductDetails from './ProductDetails'


function App() {    
    return (
        <div>
            <nav>
                <Link to="/"> Home </Link>
				<Link to="/products"> Products </Link>
            </nav>

			<Switch>
				<Route exact path="/"> <Home /> </Route>
				<Route exact path="/products"> <Products /> </Route>
				<Route path="/products/:detailsId"> <ProductDetails /> </Route>
			</Switch>
        
            
        </div>
    )
}

export default App