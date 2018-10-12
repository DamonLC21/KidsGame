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

    render() {
        console.log(this.props.data.imageURL)
        return (
            <div className="col-md-2">
                    <div className="scene scene--card">
                     <div className="card">
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