import React from 'react'
import CTA from './CTA'

const AppReuse = () => {
return (
	<div>
	{/* example of how to add child components in between tags and be accessible in the cta file still  */}
	<CTA>
		<h1>stephanie</h1>
		<button>Hello!</button>
		<br />
	</CTA>
	{/* you have multiple tags and add new things to it */}
		<CTA>
			<input type="text" placeholder="enter name"/>
			<br />
		<button>submit</button>
	</CTA>
	</div>
)
}

export default AppReuse