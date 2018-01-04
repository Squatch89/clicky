import React from 'react';
import './Image.css';

const Image = props => (
    <div className='img-thumbnail imgWrapper'>
        <img src={props.src} className='img-fluid imgSize gridEle ' alt="rick and morty character"/>
    </div>
);

export default Image;


