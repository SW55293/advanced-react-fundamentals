import React, { useEffect, useState } from 'react'


const Context = React.createContext()

function ContextProvider({ children }) {
	const [allImgs, setImgs] = useState([])
	const [cartItems, setCartItems] = useState([])

	const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
	
	useEffect(() => {
		//get the data from the api(fetch images)
		fetch(url)
			.then(response => response.json())
			//save the data to state
			.then(data => setImgs(data))

	}, [])
	//console.log(allImgs)

	//toggling the favourite option
	//then map/searching for the matching id
	//and making it the favourite
	function toggleFave(id) {

		const newImgArray = allImgs.map(img => {
			if(img.id === id ){
				console.log(id)
				console.log(!img.isFave)
				return {
					...img,
					isFave: !img.isFave
				}
			}
			return img
		})
		setImgs(newImgArray)
	}

	function addToCart(newImg) {
		setCartItems(prevImgs => [...prevImgs, newImg])
	}

	function removeFromCart(id) {
		setCartItems(prevImgs => prevImgs.filter(image => image.id !== id))
	}
	//console.log(cartItems)
	
	//remove all items from cart once place order has been clicked
	function emptyCart() {
		setCartItems([])
	}
	



	return (
		<Context.Provider value={{ allImgs, toggleFave, addToCart, cartItems, removeFromCart, emptyCart }}>
			{children}
		</Context.Provider>
	)
}

export { ContextProvider, Context }


//(props) == after destructuring ({children})

//anything we want to get from context will happen through the value property
//so pass it through the below so that other components can use the data
//<Context.Provider value={{ allImgs }}>
//{children}
//</Context.Provider>



//function toggleFave()...> explained
/*
the function is going to take in an id, the id is the id of an image
in the array `allImgs`. The id is the one we want to modify which belongs to the
one we clicked favorite on. 
We create an updated array `newImgArray` and this new array will map/search over
all the imgs `allImgs`. This will look at every img in the array. What we are looking
for is to match the id of the img in `allImgs` to the id that was passed to the
function. If we find matching ids then we want to return all the properties of the img (...img)
and we want the isFave property to be the opposite of what it currently is.
So you can only like or dislike once but someone else can change the like.

*/