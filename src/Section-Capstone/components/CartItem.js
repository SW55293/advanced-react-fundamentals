import React, {useContext} from 'react'
import {Context} from '../Context'

//need to have some defualts so we use prop types
import PropTypes from 'prop-types'

//import for the custom on hover hook. Un-comment if you want to use
import useHover from '../customHook/useHover'

function CartItem({item}) {
	//for the custom on hover hook. Un-comment if you want to use
	const [hover, ref] = useHover()


	//const [hover, setHover] = useState(false) //if you use this one import useState
	const trashHover = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"

	//brought in functions from the context page to use here
	const {removeFromCart} = useContext(Context)


	return (
		<div className="cart-item">
			<i 
			className={trashHover}
			onClick={() => removeFromCart(item.id)}
			ref={ref}
			// onMouseEnter={() => setHover(true)} 
			// onMouseLeave={() => setHover(false)}
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