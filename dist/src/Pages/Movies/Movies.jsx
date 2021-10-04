import React, { useEffect } from 'react'
import './movies.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../Actions/Actions'
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubHeader from '../../components/SubHeader/SubHeader';


const Movies = () => {

    const dispatch = useDispatch();
    const movies = useSelector(state => state.moviesLoaded);

   useEffect(() => {
        dispatch(getMovies());

   },[dispatch])


   if(movies.length === 0) {
    return (
        <div className='loading'>
             <h2>Cargando....</h2>
        </div>
    )
} else {

    return (
        <div>
            <Header />
            <SubHeader type={'Movies'} />
            {movies.length === 0 ? (
                <div className="loading">
                    <h2>Cargando...</h2>
                </div>
            ) : (
                <div className="movies">
                    {movies?.map((e, i) => (
                        <Card
                            key={i}
                            title={e.title}
                            imagen={e.images["Poster Art"].url}
                            description={e.description}
                            releaseYear={e.releaseYear}
                        />
                    ))}
                </div>
            )}

            <Footer />
        </div>
    );
}

}


export default Movies
