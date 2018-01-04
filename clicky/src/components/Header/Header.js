import React from 'react';

const Header = props => (
    <div>
        <h3 className="header text-left">Clicky Game</h3>
        <h3 className="header text-center"> Click an image to begin!</h3>
        <h3 className='header text-right'>Score: 0 | Top Score: 0</h3>
    </div>
);

export default Header;


//score will have a props.score and top score will hold props.topScore