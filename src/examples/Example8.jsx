import { Component } from 'react'
import "./style.css";

export class Example7 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }
    
    render() {
        return (
            <Counter
                value={this.state.value}
                onIncrement={this.handleIncrement.bind(this)}
                onDecrement={this.handleDecrement.bind(this)}
            />
        );
    }

    handleIncrement() {
        this.setState({
            value: this.state.value + 1
        });
    }

    handleDecrement() {
        this.setState({
            value: this.state.value - 1
        });
    }
}

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.initialValue || this.props.value || 0
        }
    }

    render() {
        const {
            value = this.state.value,
            onIncrement = this.onIncrementHandler.bind(this),
            onDecrement = this.onDecrementHandler.bind(this),
            ...props
        } = this.props;

        return (
            <div className='counter' {...props}>
                <button className='counter__button counter__button_inc' onClick={onIncrement}>
                    +
                </button>
                <span className='counter__input'>
                    {value}
                </span>
                <button className='counter__button counter__button_dec' onClick={onDecrement}>
                    -
                </button>
            </div>
        )
    }
    onIncrementHandler() {
        this.setState({ value: this.state.value + 1 });
    }
    onDecrementHandler() {
        this.setState({ value: this.state.value - 1 });
    }
}
