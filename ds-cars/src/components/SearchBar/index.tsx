import './styles.css'

function SearchBar() {
    return (
        <>
            <div className='card-search'>
                <input className='form-control' type="text" name="search-box" placeholder='Digite sua busca' />
                <button className='btn btn-primary'>Buscar</button>
            </div>
        </>
    );
}

export default SearchBar;