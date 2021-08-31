import React, { useEffect, useState } from 'react'


const Context = React.createContext()

function ContextProvider({ children }) {
	const [allImgs, setImgs] = useState([])

	const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
	
	useEffect(() => {
		//get the data from api(fetch images)
		fetch(url)
			.then(response => response.json())
			//save the data to state
			.then(data => setImgs(data))

	}, [])
	//console.log(allImgs)



	return (
		<Context.Provider value={{ allImgs }}>
			{children}
		</Context.Provider>
	)
}

export { ContextProvider, Context }


//(props) == after destructuring ({children})