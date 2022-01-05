const redux = require("redux")


//At the most fundametal level an action is just an object with a type property
const action = {
    type: "INCREMENT",
   
}
//the type property is a string 
//the type will always have a function associated with it like below

function increment() {
	return {
		type: "INCREMENT"
	}
}

//reducer takes in the old version of state an an action that is the type property
function reducer(oldState, action) {
    // return new state
}