// High order components is a funtion that takes a comp as a param
// and returns a new comp wrapping the given comp and add extra things to it
//extra abilities
import React, { Component } from 'react'


class Toggler extends Component {
	state = {
		on: this.props.defaultOnValue
	}

	toggle = () => {
		this.setState(prevState => {
			return {
				on: !prevState.on
			}
		})
	}
	render() {
		const Component = this.props.component 
		return (
			<Component on={this.state.on}  toggle={this.toggle} {...this.props}/>
		)
	}
}
const ContainsToggler = (component, optionsObj) => {
	return function(props) {
		return (
			<Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props}/>
		)
	}
}
export default ContainsToggler