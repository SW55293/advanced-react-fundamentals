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
		// if you want to run useEffect at a specific interval ue the below
		setInterval(() => {
			setCount(prevCount => prevCount + 1)
		}, 100)

		setColor(randomcolor())

	}, [count])

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