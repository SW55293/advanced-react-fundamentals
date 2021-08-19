import React, {useState, useEffect} from 'react'

const Main = () => {
	
	const [text, setText] = useState("")
	const [timeLeft, setTimeLeft] = useState(30)

	const handleChange = (e) => {
		const {value} = e.target
		setText(value)
	}
	
	function WordCount(text) { 
		const words = text.trim().split(" ") 
		//console.log(words)
		return words.filter(word => word !== "").length
	  }

	// the following use effect controls the countdown once clicking start
	useEffect(() => {
		if(timeLeft > 0) {
			setTimeout(() => {
				setTimeLeft(time => time - 1)
			}, 1000)
		}
	}, [timeLeft])
	  

	//console.log(text)
	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea 
				onChange={handleChange}
				value={text}
			
			/>
			<h4>Time Remaining: {timeLeft} seconds</h4>
			<button onClick={() => WordCount(text)}>Start</button>
			<h1>Word Count</h1>

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