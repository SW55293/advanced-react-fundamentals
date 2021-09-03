import React, { useState, useContext } from 'react'
import { Context } from '../Context'
//need to import useContext to use the data that is found there 
import PropTypes from 'prop-types'

function Image({ className, img }) {
	//keep track of hover over the images
	const [hover, setHover] = useState(false)
	const { toggleFave, addToCart, cartItems } = useContext(Context)

	// this is the function that deals with all the heart icon logic
	function heartIcon() {
		if (img.isFave) {
			return <i className="ri-heart-fill favorite" onClick={() => toggleFave(img.id)}></i>
		} else if (hover) {
			return <i className="ri-add-circle-line cart" onClick={() => toggleFave(img.id)}></i>
		}
	}

	function cartIcon() {
		//incart.. explanation
		//"cartItems.some" will look at every image/item and will return true if any image/item in the array
		//has the id thats equal to the current img id 
		
		const inCart = cartItems.some(everyImg => everyImg.id === img.id)
		if(inCart) {
			return <i className="ri-shopping-cart-fill cart"></i>
		} else if (hover) {
			return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
		}
	}

	return (
		<div className={`${className} image-container`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
			{/* The hover portion was here first
			{hover && (
				<div>
					<i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
				</div>
			)} 
			*/}


			<img src={img.url} className="image-grid" alt="1" />

			{/* call the heartIcon function */}
			{heartIcon()}
			{cartIcon()}

		</div>
	)
}
//you should always try and set prop types for your components that are receiving props
Image.propType = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFave: PropTypes.bool
	})
}

export default Image


//onMouseEnter={() => setHover(true)}
//onMouseLeave={() => setHover(false)}
//we place both in the div so that when we enter it setHover==true 
//and the opposite for when we leave the div


// The first version of the hover
// when img is hovered then display the heart and plus sign 
/*
{hover && (
	<div>
		<i className="ri-heart-fill favorite"></i>

	  <i className="ri-add-circle-line cart" onClick={() => toggleFave(img.id)}></i>
	</div>
  )}
  */