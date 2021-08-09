import React from 'react'
// import React, {Component} from "react"
import HighOrderToggle from './HighOrder2Toggle'


const Favorite = (props) => {
    
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={props.toggle}
                    >
                        {props.on ? "❤️" : "♡"} 
						{/* first option = red hreart. and shows if statement is true */}
						{/* second option = outlinned heart. and shows when staement is false*/}
                    </span>
                </h1>
            </div>
        ) 
    
}

export default HighOrderToggle(Favorite, {defaultOnValue: false})