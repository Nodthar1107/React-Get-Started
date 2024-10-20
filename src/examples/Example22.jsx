import { Component } from 'react'
import { createPortal } from 'react-dom';
import "./style.css";

export class Example22 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ButtonWithModal />;
    }
}

class ButtonWithModal extends Component {
    #modalRoot = document.getElementById('modal')
    
    constructor(props) {
        super(props);
        this.state = {
            isModalWindowOpen: false
        };
    }

    render() {
        return (
            <>
                <button
                    onClick={() => {
                        this.setState({
                            isModalWindowOpen: true
                        });
                    }}>
                    Открыть модальное окно
                </button>
                {this.state.isModalWindowOpen && createPortal(
                    <ModalWindow onClose={this.#closeWindowHandler.bind(this)} />,
                    this.#modalRoot
                )}
            </>
        )
    }

    #closeWindowHandler() {
        this.setState({
            isModalWindowOpen: false
        });
    }
}

class ModalWindow extends Component {
    render() {
        return (
            <div style={{
                position: 'absolute',
                width: '300px',
                minHeight: '200px',
                padding: '10px',
                top: '100px',
                left: '50%',
                transform: 'translateX(-50%)',
                border: '1px solid black' }}>
                <h2>Модальное окно</h2>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore laboriosam nobis fugiat, voluptas aspernatur corporis et
                    adipisci facere soluta molestias dicta culpa numquam provident a natus recusandae
                    explicabo aperiam quasi!
                </div>
                <button onClick={this.props.onClose}>Закрыть</button>
            </div>
        )
    }
}
