import React from 'react'
import './home.scss'
import imagenFondo from '../../components/assets/placeholder.png'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'


const Home = () => {
    return (
        <div>
            <Header />
            <SubHeader />
            <div className='home'>
                <div className="home__display">
                    <div className="home__display-item">
                        <div className="home__display-opc">
                            <Link to={`/series`}>
                                <img src={imagenFondo} alt='img' />
                                <div className='home__display-opc-det'>
                                    <p>SERIES</p>
                                </div>
                            </Link>
                        </div>
                        <div className="home__display-popular">
                            <p>Popular Series</p>
                        </div>
                    </div>
                    <div className="home__display-item">
                        <div className="home__display-opc">
                            <Link to={`/movies`}>
                                <img src={imagenFondo} alt='img' />
                                <div className='home__display-opc-det'>
                                    <p>MOVIES</p>
                                </div>
                            </Link>
                        </div>
                        <div className="home__display-popular">
                            <p>Popular Movies</p>
                        </div>
                    </div>
                
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
