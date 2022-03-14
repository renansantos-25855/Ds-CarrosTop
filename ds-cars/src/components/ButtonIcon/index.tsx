import './styles.css'
import {Link} from 'react-router-dom'

function ButtonIcon() {

    return (
        <>
            <div className='base-button'>
                <Link to='/products'>
                    <button className='btn btn-primary'>Ver Catálogo</button>
                </Link>
            </div>
        </>
    );
}

export default ButtonIcon;