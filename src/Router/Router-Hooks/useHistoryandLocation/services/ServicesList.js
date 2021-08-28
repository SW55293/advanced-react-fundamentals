import React from "react"
import {Link, useLocation} from "react-router-dom"

import servicesData from "./servicesData"

function ServicesList() {
    const services = servicesData.map(service => (
        <div key={service._id}>
            <h3><Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}</h3>
        </div>
    ))

    const location = useLocation()
    console.log(location)
    //didnt get into it 

    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

export default ServicesList