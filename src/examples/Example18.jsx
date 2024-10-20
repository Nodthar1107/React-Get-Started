import { Component } from 'react'
import "./style.css";

/**
 * Пример, иллюстрирующий батчинг
 */
export class Example18 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            errorMessage: '',
            counter: 0
        };
    }

    #userNameChange = this.#userNameChangeHandler.bind(this);
    #passwordChange = this.#passwordChangeHandler.bind(this);
    #submitForm = this.#submitFormHandler.bind(this);

    render() {
        return (
            <>
                <form className='login-form'>
                    <label className='login-form__username' style={{ display: 'block' }}>
                        Логин:
                        <input
                            type='text'
                            value={this.state.userName}
                            onChange={this.#userNameChange}
                        />
                    </label>
                    <label className='login-form__password' style={{ display: 'block' }}>
                        Пароль:
                        <input
                            type='password'
                            value={this.state.password}
                            onChange={this.#passwordChange}
                        />
                    </label>
                    <div
                        className='login-form__error-messages'
                        style={{ minHeight: '32px', color: 'red' }}>
                        {this.state.errorMessage}
                    </div>
                    <button
                        type='submin'
                        onClick={this.#submitForm}>
                        Войти
                    </button>
                </form> 
                <button onClick={this.#handleIncrement.bind(this)}>{this.state.counter}</button>
            </> 
        );
    }

    #userNameChangeHandler(event) {
        this.setState({
            userName: event.target.value
        });
    }

    #passwordChangeHandler(event) {
        this.setState({
            errorMessage: event.target.value.length < 8
                ? 'Пароль должен быть не менее 8 символов'
                : ''
        });

        this.setState({
            password: event.target.value
        });
    }

    #submitFormHandler(event) {
        event.preventDefault()
    }

    #handleIncrement() {
        this.setState({ counter: this.state.counter + 1 });
        this.setState((state) => {
            return {
                counter: state.counter + 1
            };
        });
    }
}