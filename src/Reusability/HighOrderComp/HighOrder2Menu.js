import React from "react"
import HighOrderToggle from './HighOrder2Toggle'

function Menu(props) {
 
        return (
            <div>
                <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
                <nav style={{display: props.on ? "block" : "none"}}>
                    <h6>Signed in as Coder123</h6>
                    <a href="https://www.google.com">Your Profile</a>
                    <a href="https://www.google.com">Your Repositories</a>
                    <a href="https://www.google.com">Your Stars</a>
                    <a href="https://www.google.com">Your Gists</a>
                </nav>
            </div>
        )
    
}

export default HighOrderToggle(Menu, {defaultOnValue: true})