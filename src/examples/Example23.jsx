import { Component } from 'react'
import { createBrowserRouter, Link, RouterProvider, Outlet } from 'react-router-dom';
import "./style.css";

/**
 * Этот пример иллюстрирует работу с роутером приложения.
 * Для запуска примера необходимо установить две зависимости: react-router и react-router-dom
 * 
 * npm install react-router-dom --save
 */

export class Example23 extends Component {
    render() {
        return <RouterProvider router={router} />;
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
                <header
                    className='navigator'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        padding: '20px 0'
                    }}>
                    <div className='navigation__item'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='navigation__item'>
                        <Link to='/news'>News</Link>
                    </div>
                    <div className='navigation__item'>
                        <Link to='/blog'>Blog</Link>
                    </div>
                </header>

                <main style={{ flex: '1 1 auto' }}>
                    <Outlet />
                </main>

                <footer style={{
                    backgroundColor: 'black',
                    color: 'white',
                    textAlign: 'center',
                    padding: '20px 0px'
                }}>
                    2024
                </footer>
            </div>
        );
    }
}

class HomePage extends Component {
    render() {
        return (
            <h1>Home page</h1>
        )
    }
}

class NewsPage extends Component {
    render() {
        return (
            <h1>News page</h1>
        )
    }
}

class BlogPage extends Component {
    render() {
        return (
            <h1>Blog page</h1>
        )
    }
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/news',
                element: <NewsPage />
            },
            {
                path: '/blog',
                element: <BlogPage />
            }
        ]
    }
]);
