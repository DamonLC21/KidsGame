import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hideSkill: false
        }
    }

    handleChange = (event) => {
        this.setState({hideSkill: !this.state.hideSkill})
    }

    onClick =(e) =>{
        const card = e.target
        card.classList.toggle("is-flipped")
    }

    render() {
        console.log(this.props.data.imageURL)
        return (
            <div className="col-md-4">
                    <div className="scene scene--card">
                     <div className="card" onClick={this.onClick}>
                        <div className="card__face card__face--front">
                        <img src={this.props.data.imageURL} alt="Card_image" />
                        </div>
                        <div className="card__face card__face--back">back</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Cards