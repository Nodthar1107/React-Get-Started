import { Component, createContext } from 'react'
import "./style.css";

/**
 * Пример иллюстрирует создание и использование контекста
 */
const ThemeContext = createContext({
    theme: 'day',
    themeChangeHandler: undefined
});

export class Example19 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'day'
        };
    }

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    themeChangeHandler: this.#themeChangeHandler.bind(this)
                }}>
                <div
                    style={{
                        minHeight: '100vh',
                        backgroundColor: this.state.theme === 'day' ? 'white' : 'black'
                    }}>
                    <ThemeSwitcher />
                    <Content />
                </div>
            </ThemeContext.Provider>
        );
    }

    #themeChangeHandler() {
        this.setState({
            theme: this.state.theme === 'day' ? 'night' : 'day'
        });
    }
}

class ThemeSwitcher extends Component {
    static contextType = ThemeContext;
    
    render() {
        return (
            <label>
                <input
                    type='checkbox'
                    onChange={this.context.themeChangeHandler}
                />
                <span style={{ color: this.context.theme === 'day' ? 'black' : 'white' }}>
                    Включить темную тему
                </span>
            </label>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(themeContext) => {
                    return (
                        <div style={{ color: themeContext.theme === 'day' ? 'black' : 'white' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum nihil nobis
                            adipisci a, saepe reiciendis quod repellendus temporibus voluptates rerum voluptas perferendis
                            minima. Repudiandae distinctio id cum obcaecati blanditiis.
                        </div>
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}
