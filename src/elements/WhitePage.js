import React from 'react';
import PropTypes  from 'prop-types';
import '../App.css';
const WhitePage=({pagetitle})=>{
    return(<div className='white-background'>
        <h1 className='text-center'>{pagetitle}</h1>

    </div>
    );
};
WhitePage.propTypes={
    pagetitle:PropTypes.string,
};
export default WhitePage;