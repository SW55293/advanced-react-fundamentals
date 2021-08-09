import React from 'react'
import HighOrderToggle from './HighOrder2Toggle'

const Menu2 = (props) => {

	return (
		<div>
			
			<button onClick={props.toggle}>
				{props.on ? "ON" : "OFF"} Input </button>
				<nav style={{display: props.on ? "block" : "none"}}>
					<br/>
			<input type="text" placeholder="Input Name"/>
			</nav>

		</div>
	)

}

export default HighOrderToggle(Menu2, {defaultOnValue: false})

//My  own practice with toggle