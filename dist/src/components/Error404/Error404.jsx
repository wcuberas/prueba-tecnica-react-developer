import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SubHeader from '../SubHeader/SubHeader'
import './error.scss'

const Error404 = () => {
    return (
        <div>
            <Header />
            <SubHeader type={'Titles'} />
            <div className='error'>
                <p>Oops, something went wrong...</p>
            </div>
            <Footer />
        </div>
    )
}

export default Error404
