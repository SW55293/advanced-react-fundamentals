import React from 'react'
import {Link} from 'react-router-dom'

// import Settings from './Settings'
// import Info from './Info'

function Profile() {
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to="/profile/info">Profile Info</Link></li>
                <li><Link to="/profile/settings">Profile Settings</Link></li>
              
            </ul>

			{/* <Switch> */}
				{/* <Route path="/profile/info"> <Info />  </Route> */}
				{/* <Route path="/profile/settings"> <Settings />  </Route> */}
				{/* you could also place the 2 routes in app.js and have them take */}
				{/* over the whole page instead of half the page like they are now */}
			{/* </Switch> */}
        </div>
    )
}

export default Profile