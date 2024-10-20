import { Component, createRef } from 'react'
import "./style.css";

export class Example10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderInput: true
        };
    }

    static getDerivedStateFromProps(prevProps, state) {
        if (prevProps.property != state.property) {
            return {
                // Новое состояние
            }
        }


        // Игнорируем входящие пропсы
        return null;
    }

    render() {
        return (
            <div>
                <button onClick={this.handleFormSwitch.bind(this)}>
                    Переключить поля ввода
                </button>

                {this.state.renderInput && <FocusableInput />}
            </div>
        );
    }

    handleFormSwitch() {
        this.setState({ renderInput: !this.state.renderInput });
    }
}

class FocusableInput extends Component {
    #inputRef = createRef();
    
    componentDidMount() {
        if (this.#inputRef.current) {
            this.#inputRef.current.focus();
        }
    }

    render() {
        return (
            <input ref={this.#inputRef} />
        );
    }
}
