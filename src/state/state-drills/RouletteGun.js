import React from 'react'

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        })
        setTimeout(this.spinChamber, 2000);
    }

    spinChamber = () => {
        const randomNum = Math.ceil(Math.random() * 8);
        this.setState({
            chamber: randomNum,
            spinningTheChamber: false
        })
    }

    displayResults = () => {
        if (this.state.spinningTheChamber === true){
            return 'Spinning the chamber and pulling the trigger!...'
        } else if (this.state.chamber === this.props.bulletInChamber){
            return 'BANG!!!'
        } else {
            return 'You\'re safe!'
        }
    }

    componentWillUnmount() {
        clearInterval(this.setTimeout)
    }

    render(){
        return (
            <div>
                <p>{this.displayResults()}</p>
                <button onClick={this.handleClick}>Pull the Trigger</button>
            </div>
        )
    }
}

export default RouletteGun