import React from 'react';
import Card from './Card.js';

const Main = (props) => {
    
    const createCard = props.data.map((list, i) => {
        console.log("hello")
            return (
              <Card data={list} key={i}/>
            )
    })
    
        return(
            <div className="body container">
                {createCard}
            </div>
        )
    
}



export default Main