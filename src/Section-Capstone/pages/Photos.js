import React, {useContext} from "react"

import Image from '../components/Image'
import {getClass} from '../utils/index'
import {Context} from '../Context'

function Photos() {
	//the name of the imgs in state for the context page
	//has to be the same name you use here
	const {allImgs} = useContext(Context)

	//map over all the images| img = each image| index= index of each img
	const imgs = allImgs.map((img, index) => (
		<Image key={img.id} img={img} className={getClass(index)}/>
	))

    return (
        <main className="photos">
      
			{imgs}
        </main>
    )
}

export default Photos

//.map takes in a function and an index
//.map(img,index)

//Here we are getting a list of all photos then mapping over them
//and creating an <Image/> component

//this part here----className={getClass(index)}
//returns big or wide that tells the function to make the image 
