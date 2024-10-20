import { Component } from 'react'
import "./style.css";

export class Example17 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <>
                <input value={this.state.value} onChange={this.#handleChange.bind(this)} />
                <div
                    style={{
                        backgroundColor: 'red',
                        width: '100px',
                        height: '100px'
                    }}
                    onClick={this.#onClickHandler.bind(this)}
                />
            </>
        );
    }

    #handleChange(event) {
        console.log(event);
        this.setState({
            value: event.target.value
        });
    }

    #onClickHandler(event) {
        console.log(event);
    }
}