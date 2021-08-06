import React from 'react'
//import HighOrderPractice from './HighOrderComp/HighOrderPractice'
import HighOrderToggle from './HighOrderComp/HighOrder2'

function AppReuse2(props) {
	return (

		<div>Hello Everyone {props.faveNum}</div>
	)
}

export default HighOrderToggle(AppReuse2)