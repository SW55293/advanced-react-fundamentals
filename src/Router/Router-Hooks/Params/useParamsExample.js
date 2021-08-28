import React from 'react'
import menuInfo from './useParamData'
import {Link} from 'react-router-dom'


// import ServicesList from "./pages/services/ServicesList"
// import ServiceDetail from "./pages/services/ServiceDetail"


function Menu() { 
	
	const menuData = menuInfo.map(options => (
		<h3 key={options._id}>
			<Link to={`/menuData/${options._id}`}>{options.name} </Link>  - ${options.price} </h3>
	))


    return (
        <div>
       
            <div>
			<img 
			src="https://www.davidlebovitz.com/wp-content/uploads/2014/05/14241705403_310baa27f5.jpg" 
			width="50%" alt="img-1" />
			</div>
	
			{menuData}
	  
            {/* yummly.co */}
            
        </div>
    )

}


export default Menu