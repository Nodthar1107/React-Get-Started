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

export class Example13 extends Component {
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
                <EmailInput id={id} email={email} userName={userName} />
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
        id: this.props.id,
        email: this.props.email,
        userName: this.props.userName
    };
  
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.id !== prevState.id) {
            return {
                id: nextProps.id,
                email: nextProps.email,
                userName: nextProps.userName
            }
        }

        return null;
    }
  
    render() {
        return (
            <div className='user-card'>
                <h2 className='user-card__user-name'>{this.state.userName}</h2>
                <div className='user-card__email'>Email: {this.state.email}</div>
            </div>
        );
    }
}