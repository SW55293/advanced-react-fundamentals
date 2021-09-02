import React, { useState, useContext } from 'react'
import { Context } from '../Context'
//need to import useContext to use the data that is found there 
//<i className="ri-heart-line favorite"></i> : <i className="ri-heart-fill favorite"></i>

function Image({ className, img }) {
	//keep track of hover over the images
	const [hover, setHover] = useState(false)
	const { toggleFave } = useContext(Context)

// this is the function that deals with all the heart icon logic
	function heartIcon() {
		if (img.isFave) {
			return <i className="ri-heart-fill favorite" onClick={() => toggleFave(img.id)}></i>
		} else if (hover) {
			return <i className="ri-add-circle-line cart" onClick={() => toggleFave(img.id)}></i>
		}
	}

	return (
		<div className={`${className} image-container`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
			{hover && (
				<div>
					<i className="ri-add-circle-line cart" onClick={() => toggleFave(img.id)}></i>
				</div>
			)}
			{/* call the heartIcon function */}
			{heartIcon()}

			<img src={img.url} className="image-grid" alt="1" />

		</div>
	)
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