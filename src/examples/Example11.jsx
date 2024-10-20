import { Component } from 'react'
import "./style.css";

export class Example11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <>
                <Input value={this.state.value} />
                <button
                    onClick={() => { this.setState({ value: this.state.value + 'a' }) }}>
                    Изменить строку
                </button>
            </>
        );
    }
}

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('get derived state from props')
        
        return {
            value: nextProps.value
        };
    }

    render() {
        return (
            <input
                value={this.state.value}
                onChange={(event) => { this.setState({value: event.target.value}); }}
            />
        );
    }
}
