//this will hold the header, footer, jumbotron, and game div

//game div will call the images and place them in rows

//state for images will be in wrapper

import React from 'react';


const Wrapper =  props => <div className="wrapper">{props.children}</div>;

export default Wrapper;


