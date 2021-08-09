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
			<Render1 nameArray={["steph ", "dog ", "tree "]}/> 
			
			{/* function return...not really working well */}
			<Render1 func={function() {return "this is a function"}}/>
		</div>
	)
}

export default AppReuse2

//created another App function to export it without all the clutter of the other one