import React from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            who: "world"
        }
    }

    handleWorldButtonClick = () => {
        console.log('World button clicked')
        this.setState({
            who: "world"
        })
    }

    handleFriendButtonClick = () => {
        console.log('Friend button clicked')
        this.setState({
            who: "friend"
        })
    }

    handleReactButtonClick = () => {
        console.log('React button clicked')
        this.setState({
            who: "React"
        })
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}! </p>
                <button onClick={this.handleWorldButtonClick}>World</button>
                <button onClick={this.handleFriendButtonClick}>Friend</button>
                <button onClick={this.handleReactButtonClick}>React</button>
            </div>
        )
    }
}

export default HelloWorld;
