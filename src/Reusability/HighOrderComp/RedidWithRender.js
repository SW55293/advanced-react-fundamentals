// I redid all the files in the folder to make use of render and rendering the 
// funtion that will be passed to all the components

// ******* Toggler *******
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
		return (
			<div>
				{this.props.render(this.state.on, this.state.toggle)}
			</div>
		)
	}
}

export default Toggler






// ******* Favorite *******
// Need to have an import for Toggler
const Favorite = () => {

	return (
		<Toggler render={
			(on, toggle) => (
				<div>
					<h3>Click heart to favorite</h3>
					<h1>
						<span onClick={toggle}>
							{on ? "❤️" : "♡"}
							{/* first option = red heart. and shows if statement is true */}
							{/* second option = outlinned heart. and shows when staement is false*/}
						</span>
					</h1>
				</div>

			)
		} />
	)



}

export default Favorite



// ******* Menu *******

const Menu = () => {

	<Toggler render= {
		(on, toggle) => (
			<div>
			<button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
			<nav style={{ display: on ? "block" : "none" }}>
				<h6>Signed in as Coder123</h6>
				<a href="https://www.google.com">Your Profile</a>
				<a href="https://www.google.com">Your Repositories</a>
				<a href="https://www.google.com">Your Stars</a>
				<a href="https://www.google.com">Your Gists</a>
			</nav>
		</div>
		)
	
	} />

	

}

export default Menu