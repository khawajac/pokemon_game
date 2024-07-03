import {Link, Outlet} from 'react-router-dom'

const Navigation = () => {
    
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/your-library'>Your Library</Link></li>
                    <li><Link to='/play'>Play</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;