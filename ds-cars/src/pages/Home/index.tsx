import NavBar from '../../components/Navbar/Navbar';
import ButtonIcon from '../../components/ButtonIcon'
import './styles.css'

import MainImage from "../../assets/images/main-image.svg"
function Home() {
    return (
        <>
            <div className='main-card'>
                <div className='base-card card-content bg-primary'>
                    <div className='card-content-img'>
                        <img src={MainImage} alt='imagem de um carro amarelo'></img>
                    </div>
                    <div className='card-content-msg'>
                        <h4>O CARRO PERFEITO PARA VOCÊ </h4>
                        <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                    </div>
                </div>

                <div className='base-card card-action'>
                        <div className='card-action-btn'>
                        <ButtonIcon />
                        </div>
                        <div className='card-action-msg'>
                            <p>Comece agora a navegar</p>
                        </div>

                </div>

            </div>
        </>
    );
}

export default Home;