import React from 'react'

function CartItem({item}) {
	return (
		<div className="cart-item">
			<i className="ri-delete-bin-line"></i>
			<img src={item.url} width="120px" alt="cart-item"/>
			<p>$2.99</p>

		</div>
	)
}

export default CartItem