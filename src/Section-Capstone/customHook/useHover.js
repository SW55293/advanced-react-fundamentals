//this is an optional hook that can be used to move some
//of the hover functionalities here
import {useState, useEffect, useRef} from 'react'


function useHover() {
	const [hover, setHover] = useState(false)
	const ref = useRef(null)

	function enter() {
		setHover(true)

	}

	function leave() {
		setHover(false)

	}

	useEffect(() => {
		

		ref.current.addEventListener("mouseenter", enter)
		ref.current.addEventListener("mouseleave", leave)

		//cleanup event listeners
		return () => {
		ref.current.removeEventListener("mouseenter", enter)
		ref.current.removeEventListener("mouseleave", leave)
		
		}
	}, [])

	return [hover, ref]
}

export default useHover


