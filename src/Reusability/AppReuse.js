import React from 'react'
//import CTA from './CTA'
import InfoCallout from './Callout/InfoCallout'
import ImageCallout from './Callout/ImageCallout'
import EmailCallout from './Callout/EmailCallout'

import RegularCallout from './Callout/RegularCallout'

const AppReuse = () => {
	return (
		// <div>
		// {/* example of how to add child components in between tags and be accessible in the cta file still  */}
		// <CTA>
		// 	<h1>stephanie</h1>
		// 	<button>Hello!</button>
		// 	<br />
		// </CTA>
		// {/* you have multiple tags and add new things to it */}
		// 	<CTA>
		// 		<input type="text" placeholder="enter name"/>
		// 		<br />
		// 	<button>submit</button>
		// </CTA>
		// </div>
		<main>
			{/* regular callout gives you the option to condense the code into separate files
			with a regular callout we can get rid of image/info/email callout and replace them with
			3 separate regular callouts. I left them in so that I can tel the difference. 
			You just get rid of props from each of the callout files inside there respective divs */}

			<RegularCallout>
				<h2>look here</h2>
				<p> thThe knives seemed to move of their own accord, gliding with a luminous digital 
				display wired to a subcutaneous chip. They were dropping, </p>
			</RegularCallout>

			<InfoCallout
				header="look here"
				body="d in thThe knives seemed to move of their own accord, gliding with a luminous digital 
				display wired to a subcutaneous chip. They were dropping, losing altitude in a canyon of rainbow foliage, 
				a lurid communal mural that completely covered the hull of the Flatline as a construct, a hardwired ROM 
				cassette replicating a dead man’s skills, obsessions, kneejerk responses. He’d waited in the Japanese night 
				like li"
			/>
			<p>
				The semiotics of the arcade showed him broken lengths of damp chipboard and the robot gardener.
				 A narrow wedge 
			</p>

			<ImageCallout
			img="https://picsum.photos/id/102/4320/3240"
			caption="berries!!!" 
			/>
			<p>
				She peered at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck
				 sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. He’d waited 
			</p>

			<EmailCallout
			header="stuff things and whatever"
			btnText="this is a button!!"
			/>


		</main>


	)
}

export default AppReuse