import React from 'react'
import '../App.css';

function Cat(props) {
    return (
        <div id="catsContainer">
            {props.cats.map(cat =>
                <div id="catsContainer">
                    <div id="cat">
                        <h2>Breed: {cat.breed}</h2>
                        <p>{cat.description}</p>
                        <img src={cat.imgurl} alt={cat.breed} width="200" ></img>
                        <p>Pros: {cat.pros}<br></br>
                            Cons: {cat.cons}</p>
                    </div>
                </div>
            )
            }
        </div>
    )
}








export default Cat;