import React from 'react'
import {useParams} from 'react-router-dom'
import menuInfo from './useParamData'

function Options(props) {
	
	const { menuData } = useParams();
	const services = menuInfo.find(menu => menu._id === menuData)


	return(
		<div>
			
				<h2>These are the values</h2>
				<p> {services.name} - ${services.price}</p>
				<p>{services.description}</p>
				
			

		</div>
	)
}

export default Options


// this whole page is not showing up
// not sure what the hell is up