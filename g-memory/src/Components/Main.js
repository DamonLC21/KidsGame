import React from 'react';
import Card from './Card.js';

class Main extends React.Component{
    
    render (){
        return(
            <div className="body container">
                <Card data={this.props.data}/>

            </div>
        )
    }
}



export default Main