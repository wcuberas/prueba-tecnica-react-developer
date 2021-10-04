import React, { useEffect } from 'react'
import Card from '../../components/Card/Card'
import './series.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getSeries } from '../../Actions/Actions'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubHeader from '../../components/SubHeader/SubHeader';



const Series = () => {

    const dispatch = useDispatch();
    const series = useSelector(state => state.seriesLoaded)

   useEffect(() => {
        dispatch(getSeries());

   },[dispatch])

    return (
        <div>
            <Header />
            <SubHeader type={'Series'} />
            {series.length === 0 ? (
                <div className="loading">
                    <h2>Cargando...</h2>
                </div>
            ) : (
                <div className="series">
                    {series?.map((e, i) => (
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

export default Series
