import React from "react"
import useCounter from './customCounter'


function App() {   

   const {count, increment} = useCounter()
   
   // const [count, increment]
   // you can also change the names here if you put them in 
   // square array brackets
  
        return (
            <div>
                <h1>The count is {count}</h1>
                <button onClick={increment}>Add 1</button>
            </div>
        )
    
}

export default App
