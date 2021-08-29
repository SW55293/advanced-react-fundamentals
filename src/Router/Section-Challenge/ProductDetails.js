import React from 'react'
import Data from './ProductData'
import {useParams} from 'react-router-dom'

function Details() {
	const {detailsId} = useParams()
	const thisDetails = Data.find(details => details.id === detailsId)
	return(
		<div>
			<h1>Details Page</h1>
			<h3>{thisDetails.name} - ${thisDetails.price}</h3>
			<p>{thisDetails.description}</p>
		</div>
	)
}

export default Details