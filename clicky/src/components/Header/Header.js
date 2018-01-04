import React from 'react';
import './Header.css';

const Header = props => (
    <div className="row header">
        <h3 className="col-sm text-center header-text">Clicky Game</h3>
        <h3 className="col-sm text-center header-text"> Click an image to begin!</h3>
        <h3 className='col-sm text-center header-text'>Score: 0 | Top Score: 0</h3>
    </div>
);

export default Header;


//score will have a props.score and top score will hold props.topScore