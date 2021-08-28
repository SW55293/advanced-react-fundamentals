import React from "react"
import Header from './services/Header'
import Home from './Home'
import ServicesList from './services/ServicesList'
import ServiceDetail from './services/ServiceDetail'

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/services" component={ServicesList}/>
                <Route path="/services/:serviceId" component={ServiceDetail}/>
            </Switch>
        </div>
    )
}

export default App