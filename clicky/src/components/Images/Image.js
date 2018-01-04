//this will hold the images
import React from 'react';
import './Image.css';

const Image = props => (
    <div className='img-wrapper'>
        {/*<img src={props.source} className='img-thumbnail img-fluid' />*/}
        <img src="http://image-cdn.neatoshop.com/styleimg/62796/none/kiwigreen/default/361729-19;1512463610i.jpg" className='img-thumbnail img-fluid' alt="pickle rick" />
    </div>
);

export default Image;


