import React from 'react'


const RenderPractice = (props) => {
	//console.log(props.nameArray)
	//console.log(props.func)

	return (
		<div>

			{props.nameArray}

			{/* Hello there {props.func("Stephanie")} */}
			{/* pass in a name into the function for #3 in appreuse2*/}

			{/* {props.func(false)} */}
			{/* example with a boolean variable */}

			{props.name(29)}

		</div>
	)
}


export default RenderPractice
