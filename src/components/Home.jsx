import {Link, Outlet} from 'react-router-dom'

const Home = () => {

    return (
        <>
            <h1 id='title'>Pokemon Game</h1>
            <h2>Hey there Pokemon Player!</h2>
            <p>Here are some rules to the game:</p>
            <ul>
                <li>Head over to the Play tab</li>
                <li>Pick 2 random Pokemon Cards</li>
                <li>Whoever has the highest HP wins!</li>
            </ul>
        </>
    )
}



export default Home; 