import React from "react"
import DataFetcher from "./Render/RenderChal"

const App = () => {
	return (

		<DataFetcher
			url="https://swapi.dev/api/people/1"
			render={({ loading, data }) => (
				<div>
					{loading ? <h1>Loading...</h1> : <p>{JSON.stringify(data)}</p>}

				</div>

			)} />)

}

export default App


