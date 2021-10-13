import React, { useEffect, useState } from 'react'
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
    const [input, setInput] = useState('');
    const [moviesFiltered, setMoviesFiltered] = useState([])

   useEffect(() => {
        dispatch(getMovies());
   },[dispatch])


   const handleChange = (e) => {
       setInput(e.target.value)
   }

   useEffect(() => {
        const filteredMovies = input.length === 0 ? movies : movies.filter(movie => movie.title.includes(input));
        setMoviesFiltered(filteredMovies)
   }, [input, movies])


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

            <input 
                        className='input-search'
                        type="text"
                        placeholder="Busca tu pelicula"
                        value={ input }
                        onChange={ handleChange }
                    />      


            {movies.length === 0 ? (
                <div className="loading">
                    <h2>Cargando...</h2>
                </div>
            ) : (
                
                
                <div className="movies">

                    {moviesFiltered?.map((e, i) => (
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
