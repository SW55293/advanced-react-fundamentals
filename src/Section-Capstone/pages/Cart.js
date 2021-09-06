import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
	const {cartItems, emptyCart} = useContext(Context)

	//calculates the cost of each image we have in the cart
	const costOfEach = 2.99 * cartItems.length
	const totalCost = costOfEach.toLocaleString("en-US", {style: "currency", currency: "USD" })

	const cartItemElements = cartItems.map(item =>(
		<CartItem key={item.id} item={item}/>
	))

	const [placeOrder, setPlaceOrder] = useState("Place Order")

	//function that handles the fake loading once place order is clicked
	function Ordering() {
		setPlaceOrder("Ordering...")
		//fake wait of 3 seconds
		setTimeout(() => {
			console.log("you placed an order")
			setPlaceOrder("Place Order")
			emptyCart()
		}, 3000)
	}
	
	
    return (
        <main className="cart-page">
            <h1>Check out</h1>
			{cartItemElements}

			<p className="total-cost">Total: {totalCost}</p>

			{/* this below will show the h3 if no items are in your cart */}
			{ cartItems.length > 0 ? 
				<div className="order-button">  <button onClick={Ordering}>{placeOrder}</button> </div> :
				<h3>You have no items in your cart</h3>
			}
        </main>
    )
}

export default Cart