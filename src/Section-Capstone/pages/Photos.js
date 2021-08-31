import React from "react"
import Image from '../components/Image'
import {getClass} from '../utils/index'
import allPhotos from '../Context'

function Photos() {
	const imgs = Image.map(service => (
		<Image key={service.id} img={} className=""/>
	))
    return (
        <main className="photos">
            <h1>Images go here</h1>
        </main>
    )
}

export default Photos