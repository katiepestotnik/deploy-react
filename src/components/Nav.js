import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <nav>
            <div className='link'>
                <Link to='/'>
                    <div>Main</div>
                </Link>
            </div>
            <div className='link mini'>
                <Link to='/missy'>
                    <div>Missy</div>
                </Link>
                <Link to='/klondike'>
                    <div>Klondike</div>
            </Link>
            </div>

        </nav>
    )
}
export default Nav