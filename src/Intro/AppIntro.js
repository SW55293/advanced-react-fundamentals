import React from 'react'
import DefaultP from './defaultProps'

const AppIntro = () => {
	return (
		<div>
			<DefaultP cardColor="purple" height="300" width="500" borderWidth="10" borderColor="yellow"/>
			<DefaultP />
		</div>
	)
}
export default AppIntro