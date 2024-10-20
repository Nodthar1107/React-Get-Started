import { Component } from 'react'
import "./style.css";

/**
 * Условный рендеринг
 */
export class Example9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBlock: true
        };
    }

    render() {
        return (
            <div>
                <button onClick={this.handleFormSwitch.bind(this)}>
                    Переключить видимость блока
                </button>

                {this.state.renderBlock && <div>Первый блок</div> || <div>Второй блок</div>}
            </div>
        );
    }

    handleFormSwitch() {
        this.setState({ renderBlock: !this.state.renderBlock });
    }
}