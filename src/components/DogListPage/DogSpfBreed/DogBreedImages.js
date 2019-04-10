import React from 'react'
import { Link } from 'react-router-dom'
import './DogBreedImages.css'
import home from '../../../img/baum-haus.png'
import list from '../../../img/happy-dog.png'


export default (props) => {
    const { images } = props
    return (
        <div className="dog-breed-images">
            <h1>Dogs Breed Images</h1>

            This page will show images of the {props.breed} breed.

            <div class="navigation">
                <Link to="/dog-list" class="link"><img id="list" src={list} alt="list" /></Link>
                <Link to="/" class="link"><img id="home" src={home} alt="home" /></Link>
            </div>

            <div class='images'>
                <div class='image'>
                    {!images && 'Loading...'}
                    {images && images.slice(0, 10).map(url => <img class='dog-image' key={url} src={url} alt="Dog" />)}
                </div>
            </div>
        </div>
    )
}