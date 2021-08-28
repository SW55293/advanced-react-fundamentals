import React from "react"
import {useHistory, useParams} from "react-router-dom"

import servicesData from "./servicesData"

function ServiceDetail() {
    const {serviceId} = useParams()
    const thisService = servicesData.find(service => service._id === serviceId)
	
	const history = useHistory()

	//this function will immitate an ajax request or get request
	function handleClick() {
		console.log("Submitting...")
		setTimeout(() => {
			history.push("/services")
		}, 2000)
	}
    
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
			<button onClick={handleClick}>Go back</button>
        </div>
    )
}

export default ServiceDetail


//.push goes to a specific path you chose
//.go or goBack(-1)
//goes back a certain number of pages determined by the 
//negative number you place 