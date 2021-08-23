import {useState} from 'react'

function useCounter() {

	const [count, setCount] = useState(0)

	const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
	

	return {count, increment}
	//return [count, increment]
	//you put them in as an array if you want
	//to change the names in the other file
}

export default useCounter




// The below is the main component on file refactor.js
// the above is like the helper function
/*
import React, {useState} from "react"

function App() {   
    const [count, setCount] = useState(0)
    
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    
  
        return (
            <div>
                <h1>The count is {count}</h1>
                <button onClick={increment}>Add 1</button>
            </div>
        )
    
}

export default App
*/