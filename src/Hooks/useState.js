import React, {useState} from 'react'

const useStateApp = () => {
	const [value] = useState("pig")
	const [count] = useState(0)
	return (
		<div>
			<h1>Hello there, {value}</h1>
			<p>Count = {count}</p>
			<button>Go up</button>
		</div>
	)
}

export default useStateApp