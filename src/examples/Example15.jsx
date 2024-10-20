import { Component, PureComponent } from 'react'
import "./style.css";

/**
 * Этот пример иллюстрирует вызовы методов жизненного цикла при отрисовке списков
 * 
 * В качестве ключей нужно использовать уникальные идентификаторы (в том случае, если
 * список не будет изменяться, то можно использовать индекс элемента в массиве; во всех
 * других случаях индексом должен быть какой-то пропс с уникальным значением)
 * 
 * Если пропсы компонента при перерисовке всего списка не изменяются (при услвии, что ключ не изменился),
 * то применяется оптимизация (элемент не перерисовывается). Отсюда следует, что ключом не может
 * выступать индекс
 */
export class Example15 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: 'Никита'},
                { id: 2, name: 'Мария' },
                { id: 3, name: 'Леонид' },
                { id: 4, name: 'Владислав'}
            ]
        };
    }

    #handler = this.#removeUserHandler.bind(this);

    render() {
        return (
            <div style={{ padding: '10px' }}>
                {this.state.users.map((user, index) => {
                    return (
                        <UserCard
                            index={index}
                            name={user.name}
                            onClickHandler={this.#handler}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    }

    #removeUserHandler(index) {
        const updatedUsersList = this.state.users.slice();
        updatedUsersList.splice(index, 1);

        this.setState({
            users: updatedUsersList
        });
    }
}

class UserCard extends PureComponent {
    componentDidMount() {
        console.log('Component did mount: ' + this.props.name);
    }

    componentWillUnmount() {
        console.log('Component will unmount: ' + this.props.name);        
    }

    componentDidUpdate(prevProps) {
        console.log('Component did update: ' + prevProps.name + ' -> ' + this.props.name);        
    }

    render() {
        console.log('Render: ' + this.props.name);

        return (
            <li className='user-card'>
                <span>{this.props.name}</span>
                <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => { this.props.onClickHandler(this.props.index) }}>
                        X
                </button>
            </li>
        );
    }
}