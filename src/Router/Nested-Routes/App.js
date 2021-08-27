import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Menu from '../Router-Hooks/useParams'

import {Switch, Route} from 'react-router-dom'

// if you want settings and info to take over whole page
import Info from './Pages/Info'
import Settings from './Pages/Settings'

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route exact path="/profile"> <Profile/> </Route>

				<Route path="/profile/info"> <Info />  </Route>
				<Route path="/profile/settings"> <Settings />  </Route>

                <Route path="/menu"> <Menu />  </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default App
