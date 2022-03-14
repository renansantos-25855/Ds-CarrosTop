import ProductCard from '../../components/ProductCard'
import SearchBar from '../../components/SearchBar'
import './styles.css'

function Catalog() {

    return (
        <>
            <div className='container'>
                <div className='main-card'>
                    <form>
                        <div className='base-card search-bar-card'>
                            <SearchBar />
                        </div>
                    </form>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-6 col-lg-4'>
                                <ProductCard />
                            </div>

                            <div className='col-sm-6 col-lg-4'>
                                <ProductCard />
                            </div>

                            <div className='col-sm-6 col-lg-4'>
                                <ProductCard />
                            </div>

                            <div className='col-sm-6 col-lg-4'>
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalog;