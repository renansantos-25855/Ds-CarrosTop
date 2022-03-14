import './styles.css'
import 'bootstrap/js/src/collapse.js';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Navbar() {

    return (
        <nav className="navbar navbar-expand-md navbar-dark main-nav">
            <div className="container-fluid">
                <Link to='/' className="navbar-title"><h2>Carros top</h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav main-menu">
                        <li>
                            <NavLink to='/' className="nav-item ">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/products' className="nav-item ">Catálogo</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;