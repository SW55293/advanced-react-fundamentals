import React from 'react'
//import DefaultP from './defaultProps'
import RoundedImg from './RoundedImg'
import './rounded-style.css'

const AppIntro = () => {
	return (
		<div>
			{/* <DefaultP cardColor="purple" height="100" width="500" />
			<DefaultP />
			<DefaultP cardColor="pink" height="700" width="200" /> */}

			<RoundedImg src="https://picsum.photos/id/237/300/300" borderRadius="10px" alt="pic"/>
		</div>
	)
}
export default AppIntro