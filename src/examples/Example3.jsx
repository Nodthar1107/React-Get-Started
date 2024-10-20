import { Component } from 'react'
import "./style.css";

/**
 * Пример классового компонента и композиции
 */
export class Example3 extends Component {
    render() {
        return (
            <div>
                <Welcome name="Боб" />
                <Welcome name="Стив" />
                <Welcome name="Фрэнк" />
            </div>
        )
    }
}

class Welcome extends Component {
    render() {
        return <h1>Привет, {this.props.name}!</h1>;
    }
}



