import { Component } from 'react'
import './style.css';

import img from '../images/mem-rabbit.jpg';

/**
 * Описание компоненты отображения.
 */
export class Example4 extends Component {
    render() {
        return (
            <ProfileCard
                name='Bob'
                description='Some interesting description'
                avatarUrl={img}
                onClick={() => alert('Profile card')}
            />
        );
    }
}

class ProfileCard extends Component {
    render() {
        const { avatarUrl, name, description, onClick, ...props } = this.props;

        return (
            <div className='profile-card' onClick={onClick} {...props}>
                <img className='profile-card__avatar' src={avatarUrl} alt='' />
                <div className='profile-card__personal-info'>
                    <div className='profile-card__name'>
                        {name}
                    </div>
                    <div className='profile-card__description'>
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}



