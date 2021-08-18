import React, {useState} from 'react'

const useStateApp = () => {
	const [value] = useState("pig")
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(prevCount => prevCount + 1)
	}

	const decrement = () => {
		setCount(prevCount => prevCount -1)
	}

	return (
		<div>
			<h1>Hello there, {value}</h1>
			<p>Count = {count}</p>
			<button onClick={increment}>Go up</button>
			<button onClick={decrement}>Go Down</button>
		</div>
	)
}

export default useStateApp