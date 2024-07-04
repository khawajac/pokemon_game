import {Link, Outlet} from 'react-router-dom'

const Navigation = () => {

    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'><strong>Home</strong></Link></li>
                    <li><Link to='/your-library'><strong>Your Library</strong></Link></li>
                    <li><Link to='/play'><strong>Play</strong></Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}



export default Navigation; 