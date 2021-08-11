import React from 'react'
//import HighOrderPractice from './HighOrderComp/HighOrderPractice'
// import Favorite from './HighOrderComp/HighOrder2'
// import Menu from './HighOrderComp/HighOrder2Menu'
// import Menu2 from './HighOrderComp/MyMenuPractice'
import Render1 from './Render/RenderPractice'

const AppReuse2 = (props) => {
	return (

		// <div>
		// 	<Favorite />
		// 	<hr /> 
		// 	{/* hr = horizontal line break */}
		// 	<Menu />
		// 	<hr /> 
		// 	<Menu2 />
		// </div>
		<div>
			{/* array return */}
			{/* <Render1 nameArray={["steph ", "dog ", "tree "]}/>  */}

			{/* 1 = <Render1 func={function() {return "this is a function"}}/> */}
			{/* 2 = <Render1 func={function() {return <h1>"this is a function"</h1>}}/> */}
			{/* 3 = <Render1 func={function(name) {return <h1>Hey {name}</h1>}}/> */}
			{/* <Render1 func={
				function (isCool) {
					return (
						<h1>Stephanie, {isCool ? "is Cool" : "Sucks!"}</h1>
					)
				}
			} /> */}
			<Render1 name={
				function(number) {
					return (
						<h1>{number > 0 ? "0 and greater" : "Less than 0"}</h1>
					)
				}
			} />
		</div>
	)
}

export default AppReuse2

//created another App function to export it without all the clutter of the other one