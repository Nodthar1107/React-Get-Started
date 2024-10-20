import { Component } from 'react'
import "./style.css";

/**
 * Этот пример демонтрирует использование props.children
 */
export class Example20 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <StyledDiv>Какой-то стилизованный блок</StyledDiv>;
        // return <StyledDiv>{() => { return <>Какой-то стилизованный блок</> }}</StyledDiv>;
    }
}

class StyledDiv extends Component {
    render() {
        return (
            <div style={{
                padding: '20px',
                color: 'green',
                fontWeight: 'bold',
                fontSize: '2em',
                border: '1px solid red',
                margin: '20px'
            }}>
                {
                    typeof this.props.children === 'function'
                        ? this.props.children()
                        : this.props.children
                }
            </div>
        )
    }
}
