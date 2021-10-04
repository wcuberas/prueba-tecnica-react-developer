import React from 'react'
import './subheader.scss'


const SubHeader = ({type}) => {
    return (
        <div>
            <div className="subHeader">Popular {type ? type : 'Titles'}</div>
        </div>
    )
}

export default SubHeader
