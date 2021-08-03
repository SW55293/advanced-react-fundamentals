import React from 'react'
import PropTypes from 'prop-types'


const Card = (props) => {
	const styles = {
		backgroundColor: props.cardColor,
		height: props.height,
		width: props.width,
		borderWidth: props.borderWidth,
		borderColor: props.borderColor

	}
	return (
		<div style={styles}>
			<h4>working</h4>
		</div>
	)

}

Card.defaultProps = {
	cardColor: "blue",
	height: 100,
	width: 100,
	borderWidth: 20,
	borderColor: "pink"
}

Card.propTypes = {
	cardColor: PropTypes.string.isRequired
}
//can you the validator of isRequired to require something

export default Card

//defaultProps will set up default values that will trigger
//if there are no other values set for the variables.
//For example if you set the card color and the width but dont
//set the height than the default height will be 100px