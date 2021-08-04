import React from 'react'
import DefaultP from './defaultProps'

const AppIntro = () => {
	return (
		<div>
			<DefaultP cardColor="purple" height="100" width="500" />
			<DefaultP />
			<DefaultP cardColor="pink" height="700" width="200" />
		</div>
	)
}
export default AppIntro