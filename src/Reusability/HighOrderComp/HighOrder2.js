import React, {Component} from 'react'
// import React, {Component} from "react"
import HighOrderToggle from './HighOrder2Toggle'


class Favorite extends Component {
    state = {
        isFavorited: false
    }
    
    toggleFavorite = () => {
        this.setState(prevState => {
            return {
                isFavorited: !prevState.isFavorited
            }
        })
    }
    
    render() {
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={this.toggleFavorite}
                    >
                        {this.state.isFavorited ? "❤️" : "♡"} 
						{/* first option = red hreart. and shows if statement is true */}
						{/* second option = outlinned heart. and shows when staement is false*/}
                    </span>
                </h1>
            </div>
        ) 
    }
}

export default HighOrderToggle(Favorite)