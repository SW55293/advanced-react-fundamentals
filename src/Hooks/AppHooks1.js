import React, {useState} from 'react'

const App = () => {
	const value = useState("pig")
	return (
		<div>
			<h1>Hello there, {value[0]}</h1>
		</div>
	)
}

export default App