import React, { useState, useEffect, useRef } from 'react'

const Main = () => {

	const [text, setText] = useState("")
	const [timeLeft, setTimeLeft] = useState(5)
	const [isTimeRunning, setTimeRunning] = useState(false)
	const [countedWordz, setCountedWordz] = useState(0)
	const inputRef = useRef(null)

	const handleChange = (e) => {
		const { value } = e.target
		setText(value)
	}

	function WordCount(text) {
		const words = text.trim().split(" ")
		//console.log(words)
		
		return words.filter(word => word !== "").length
	}

	function startGame() {
		setTimeRunning(true)
		setTimeLeft(5)
		setText("")
		inputRef.current.disabled = false
		inputRef.current.focus()
	}


	// the following use effect controls the countdown once clicking start
	useEffect(() => {
		if (isTimeRunning === true && timeLeft > 0) {
			setTimeout(() => {
				setTimeLeft(time => time - 1)
			}, 1000)
		} else if (isTimeRunning === 0) {
			endOfGame(text)
		}
		// eslint-disable-next-line
	}, [timeLeft, isTimeRunning])

	function endOfGame(text) {
		setTimeRunning(false)
		const numWordz = WordCount(text)
		setCountedWordz(numWordz)
		//or
		//setCountedWordz(WordCount(text))

	}
	//console.log(text)
	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea
				ref={inputRef}
				onChange={handleChange}
				value={text}
				disabled={!isTimeRunning}

			/>
			<h4>Time Remaining: {timeLeft} seconds</h4>
			<button
				onClick={startGame}
				disabled={isTimeRunning}
			>
				Start</button>
			<h1>Word Count: {countedWordz}</h1>

		</div>
	)
}

export default Main

/*
const WordCount = (text) => {
	const words = text.split(" ").length
	return words.length
}
*/