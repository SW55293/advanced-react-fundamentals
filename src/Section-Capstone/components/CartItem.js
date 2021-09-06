import React, {useContext, useState} from 'react'
import {Context} from '../Context'

//need to have some defualts so we use prop types
import PropTypes from 'prop-types'

function CartItem({item}) {
	const [hover, setHover] = useState(false)
	const trashHover = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"

	//brought in functions from the context page to use here
	const {removeFromCart} = useContext(Context)


	return (
		<div className="cart-item">
			<i 
			className={trashHover}
			onClick={() => removeFromCart(item.id)}
			onMouseEnter={() => setHover(true)} 
			onMouseLeave={() => setHover(false)}
			></i>
			<img src={item.url} width="120px" alt="cart-item" />
			<p>$2.99</p>

		</div>
	)
}

CartItem.propType = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired
	})
}

export default CartItem