import React from 'react'


const RenderPractice = (props) => {
	//console.log(props.nameArray)
	//console.log(props.func())

	return (
		<div>
		
			{props.nameArray}
		
			<h2>Hello {props.func}</h2>
			
		</div>
	)
}


export default RenderPractice
