import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../Context'

function Header() {
	const {cartItems} = useContext(Context)

	//the below is for either displaying a filled cart icon on the header or empty for when we 
	//dont have anything in the cart.. it uses the props for cart items
	const cartHeaderDisplay = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
           
			<Link to="/"> <h2>Pic Some</h2></Link>
            <Link to="/cart"><i className={`${cartHeaderDisplay} ri-fw ri-2x`}></i></Link>
        </header>
    )
}

export default Header
