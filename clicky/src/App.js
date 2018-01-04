import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Jumbo from './components/Jumbo/Jumbo'
import Images from './components/Images/Image';
import GameSpace from './components/GameSpace/GameSpace';

class App extends Component {
    
    state = {
        image: ["http://image-cdn.neatoshop.com/styleimg/62796/none/kiwigreen/default/361729-19;1512463610i.jpg", "https://www.geek.com/wp-content/uploads/2016/05/squanching.jpg", "https://vignette.wikia.nocookie.net/rickandmorty/images/0/08/Tammy.png/revision/latest?cb=20140523063749", "https://vignette.wikia.nocookie.net/rickandmorty/images/b/bd/Shut_Up_Hamurai.png/revision/latest?cb=20170131022414", "https://vignette.wikia.nocookie.net/rickandmorty/images/d/d2/Rick_D99.png/revision/latest?cb=20170402053917", "https://vignette.wikia.nocookie.net/rickandmorty/images/8/84/Fart.jpg/revision/latest?cb=20150806021947", "http://static.tvtropes.org/pmwiki/pub/images/snuffles_helmet.jpg", "http://cdn.smosh.com/sites/default/files/2017/09/mr%20poopy%20butthole.jpg", "http://www.rickandmortyshow.com/wp-content/uploads/2016/07/summer2.jpg", "https://thoughtcatalog.files.wordpress.com/2017/11/rick-sanchez-and-morty-adult-swim.jpg?w=590&h=383", "http://static.tvtropes.org/pmwiki/pub/images/i2h2pgn.png", "http://static.tvtropes.org/pmwiki/pub/images/13_1.jpg"]
    };
    
    
    
  render() {
    return (
      <Wrapper>
          <Header />
          <Jumbo />
          <GameSpace>
          {this.state.image.map(image => (
              <Images
                  src={image}
                  clicked={false}
              />
          ))}
          </GameSpace>
          <Footer />
      </Wrapper>
    );
  }
}

export default App;
