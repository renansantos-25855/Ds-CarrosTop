import './styles.css'
import ProductImg from '../../assets/images/car-product.png'

function ProductCard(){

    return(
        <>
            <div className='base-card product-card'>
                <div className='product-card-top'>
                    <img src={ProductImg} alt='Imagem de carro esportivo vermelho' />
                </div>
                <div className='product-card-middle'>
                    <h4> Audi C6 </h4>
                    <p>Carro top com travas elétricas e muito amor</p>
                </div>
                <div className='product-card-bottom'>
                    <button className='btn btn-primary'>Comprar</button>
                </div>

            </div>
        </>

    );
}

export default ProductCard;