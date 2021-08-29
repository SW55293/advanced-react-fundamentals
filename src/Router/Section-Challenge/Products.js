import React from "react"
import Data from './ProductData'
import {Link} from 'react-router-dom'

function Products() { 
	const productData = Data.map(details => (
		<div key={details.id}>
			<h2><Link to={`/products/${details.id}`}>{details.name}</Link> - ${details.price}</h2>
			{/* <h3>{data.description}</h3> */}
			<hr />
		</div>
	))   
    return (
		<div>
        <h1>Products Page</h1>
		{productData}
		</div>
    )
}

export default Products