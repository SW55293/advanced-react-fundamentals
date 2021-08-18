import React, {useState, useEffect} from 'react'
import randomcolor from "randomcolor"

const useEffectApp = () => {
	const [value] = useState("pig")
	const [count, setCount] = useState(0)
	const [color, setColor] = useState("")

	const increment = () => {
		setCount(prevCount => prevCount + 1)
	}

	const decrement = () => {
		setCount(prevCount => prevCount -1)
	}

	useEffect(() => {
		setColor(randomcolor())
	}, [count])

// if you want to run useEffect at a specific interval use the below //////
//you can change the interval time to your preference
/*
	useEffect(() => {
		const intervalID = setInterval(() => {
			setCount(prevCount => prevCount + 1)
		}, 100)
		//cleanup function...sorta like cache clean up
		return () => {
			cleanInterval(intervalID)
		}
	}, [])
	*/

	return (
		<div>
			<h1 style={{color: color}}>Hello there, {value}</h1>
			<p style={{color: color}}>Count = {count}</p>
			<button onClick={increment}>Go up</button>
			<button onClick={decrement}>Go Down</button>
		</div>
	)
}

export default useEffectApp 