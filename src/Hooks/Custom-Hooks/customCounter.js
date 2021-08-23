import React, {useState} from "react"
/**
 * Pop Quiz!
 * 
 * Refactor the class component below to use hooks instead
 */


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