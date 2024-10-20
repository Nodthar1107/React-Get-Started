import { Component } from 'react';

export class Example1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'article',
            null,
            React.createElement(
                'h1',
                null,
                'My First Component'
            ),
            React.createElement(
                'ol',
                null,
                React.createElement(
                    'li',
                    null,
                    'Components: UI Building Blocks'
                ),
                React.createElement(
                    'li',
                    null,
                    'Defining a Component'
                ),
                React.createElement(
                    'li',
                    null,
                    'Using a Component'
                )
            )
        );
    }
}

