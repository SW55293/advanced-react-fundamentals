import React from 'react'
import Game from './wordGame'

const Main = () => {
	const {
		timeRemaining,
		isTimeRunning,
		handleChange,
		startClock,
		textBoxReff,
		wordCount,
		textBoxReff,
	} = Game(100)

	return (
		<div>
			<br />
			<h1>How fast can you type?</h1>
		</div>
	)


}