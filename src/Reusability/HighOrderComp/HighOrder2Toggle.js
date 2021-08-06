// High order components is a funtion that takes a comp as a param
// and returns a new comp wrapping the given comp and add extra things to it
//extra abilities
import React from 'react'

const ContainsToggler = (component) => {
	return function(props) {
		return (
			<Toggler />
		)
	}
}
export default ContainsToggler