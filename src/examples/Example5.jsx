import { Component } from 'react'
import "./style.css";

/**
 * Работа с состоянием
 */
export class Example5 extends Component {
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
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
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
    render() {
        const { value, onIncrement, onDecrement, ...props } = this.props;

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
}
