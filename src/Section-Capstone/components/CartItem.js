import React, {useContext} from 'react'
import {Context} from '../Context'

function CartItem({item}) {

	//brought in functions from the context page to use here
	const {removeFromCart} = useContext(Context)


	return (
		<div className="cart-item">
			<i className="ri-delete-bin-line" onClick={() => removeFromCart(item.id)}></i>
			<img src={item.url} width="120px" alt="cart-item"/>
			<p>$2.99</p>

		</div>
	)
}

export default CartItem