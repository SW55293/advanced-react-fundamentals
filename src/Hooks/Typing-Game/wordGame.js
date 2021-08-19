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
	} = Game(100)

	return (
		<div>
			<br />
			<h1>How fast can you type?</h1>
			<textarea 
				ref={textBoxReff}
				value={text}
				onChange={handleChange}
				disabled={!isTimeRunning}
			/>
			<h4>Time Remaining: {timeRemaining}</h4>
			<button onClick={startClock} disabled={isTimeRunning}>
				{wordCount > 0 ? "Play Again" : "Start"}
			</button>

			{wordCount > 0 && <h1>Word Count: {wordCount}</h1>}
		</div>
	)


}

export default Main