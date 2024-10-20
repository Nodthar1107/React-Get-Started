import { Component } from 'react'
import "./style.css";

/**
 * Слайд: "Синтаксис JSX"
 */
export class Example2 extends Component {
    render() {
        return (
            <div
                className='bg-black'
                style={{
                    width: '400px',
                    height: '200px',
                    color: 'white'
                }}
                onClick={this.handleClick}>
                Какой-то текст...
            </div>
        );
    }

    handleClick() {
        console.log('click')
    }
}


