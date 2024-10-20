import { Component } from 'react'
import "./style.css";

const users = [
    {
        id: 1,
        email: 'vasya-pupkin@mail.ru',
        userName: 'Vasya Pupkin'
    },
    {
        id: 2,
        email: 'vasya-pupkin@mail.ru',
        userName: 'Petya Petrov'
    },
    {
        id: 3,
        email: 'zhenya-sidorov@mail.ru',
        userName: 'Zhenya Sidorov'
    }
];

export class Example14 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userIndex: 0
        };
    }

    render() {
        const {id,  email, userName } = users[this.state.userIndex];

        return (
            <>
                <label>
                    Изменяем почту снаружи:
                    <input
                        onChange={(event) => {
                            users[this.state.userIndex].email = event.target.value;
                        }}
                    />
                </label>
                <EmailInput key={id} email={email} userName={userName} />
                <div>
                    <button onClick={() => this.setState({ userIndex: 0 })}>1</button>
                    <button onClick={() => this.setState({ userIndex: 1 })}>2</button>
                    <button onClick={() => this.setState({ userIndex: 2 })}>3</button>
                </div>
            </>
        );
    }
}

class EmailInput extends Component {
    state = {
        email: this.props.email,
        userName: this.props.userName
    };
  
    render() {
        return (
            <div className='user-card'>
                <h2 className='user-card__user-name'>{this.state.userName}</h2>
                <div className='user-card__email'>Email: {this.state.email}</div>
            </div>
        );
    }
}