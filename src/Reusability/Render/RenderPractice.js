import React from 'react'


const RenderPractice = (props) => {
	//console.log(props.nameArray)
	//console.log(props.func)

	return (
		<div>

			{props.nameArray}

			<h3>Hello there {props.func}</h3>

		</div>
	)
}


export default RenderPractice
