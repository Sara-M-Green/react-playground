import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }
    
    state = {
        currentSectionIndex: null

    }

    handleClick(index) {
        console.log('button clicked')
        this.setState({
            currentSectionIndex: index
        })
        this.renderContent(index)
    }
 
    renderSections() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleClick(index)} >
                    {section.title}
                </button>
                {(this.state.currentSectionIndex === index) && <p>{section.content}</p>}
            </li>
        ))
    }
    
    renderContent(index) {
        const currentSection = this.props.sections[index]
        console.log('rendering content')
        console.log(currentSection.content)
        return (
            <p>{currentSection.content}</p>
        )
    }


    render(){
        return (
            <div>
                <ul>
                    {this.renderSections()}
                </ul>
            </div>
        )
    }
}


export default Accordion