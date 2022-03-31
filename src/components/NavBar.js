import './NavBar.css'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return(
        <nav>
            <ul className="nav-bar">
                <NavLink activeClassName='active' to="/men"><li>Men's Clothing</li></NavLink>
                <NavLink activeClassName='active' to="/women"><li>Woman's Clothing</li></NavLink>
                <NavLink activeClassName='active' to="/electronics"><li>Electronics</li></NavLink>
                <NavLink activeClassName='active' to="/jewellery"><li>Jewellery</li></NavLink>
            </ul>
        </nav>
    )
}

export default NavBar