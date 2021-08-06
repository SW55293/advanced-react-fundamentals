import React from 'react'
//import HighOrderPractice from './HighOrderComp/HighOrderPractice'
import HToggle from './HighOrderComp/HighOrder2'
import HToggle2 from './HighOrderComp/HighOrder2Menu'

function AppReuse2(props) {
	return (

		<div>Hello Everyone {props.faveNum}</div>
	)
}

export default AppReuse2

//created another App function to export it without all the clutter of the other one