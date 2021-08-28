import React from 'react'
import {useParams} from 'react-router-dom'
import menuInfo from './useParamData'

const Options = (props) => {
	
	const {menuId} = useParams()
	const options = menuInfo.find(menu => menu._id === menuId)


	return(
		<div>
			
				<h2>These are the values {options.name} - ${options.price}</h2>
				<p>{options.description}</p>
				
			

		</div>
	)
}

export default Options