import { Component } from 'react'

/**
 * Слайд: "Синтаксис JSX"
 */
export class Example1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <h1>My First Component</h1>
                <ol>
                    <li>Components: UI Building Blocks</li>
                    <li>Defining a Component</li>
                    <li>Using a Component</li>
                </ol>
            </article>
        );
    }
}
