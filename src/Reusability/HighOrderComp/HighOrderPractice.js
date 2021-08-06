import React from 'react'

 function favoriteNumber(component) {
	const C = component

	return function(props) {
		return (
			<C faveNum={100} {...props} />
		)
	}
}

export default favoriteNumber