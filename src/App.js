import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';

function generateDeck () {
  const symbols = [ '∆', 'ß' , '£','§','•', '$', '+', 'ø']
  const deck = []
  for (let i = 0; i < 16; i++) {
  deck.push({
    isFlipped: false,
    symbol: symbols[i % 8]
  })
  }
  shuffle(deck)
  return deck;
}

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      deck: generateDeck(),
      pickedCards: [],

    }
  }


  pickCard(cardIndex){
    console.log('Clicked!')
    if(this.state.deck[cardIndex].isFlipped === true){
      return;
    } 
    const cardToFlip = {...this.state.deck[cardIndex]};
    cardToFlip.isFlipped = true;
  
    const newPickedCards = this.state.pickedCards.concat(cardIndex);
    const newDeck = this.state.deck.map( (card, index) => {
      if(cardIndex === index){
      return cardToFlip}
      return card;
  
    }
    
    )
  this.setState({
    deck: newDeck,
    pickedCards: newPickedCards
  })
  }




  render() {

    let cardsJSX = this.state.deck.map( (card, index) => {
      return <MemoryCard 
      symbol={card.symbol}
      isFlipped={card.isFlipped}
      key={index}
      pickCard={this.pickCard.bind(this, index)}
      />
    });
    console.log("cardJSX", cardsJSX)
  return (
    <div className="App">
      <header className="App-header">
        <h1>  Memory Game </h1>
        <h3> Match cards to win </h3>
      </header>
      <div>
      {cardsJSX.slice(0,4)}
      </div>
      <div>
      {cardsJSX.slice(4,8)}

      </div>
      <div>
      {cardsJSX.slice(8,12)}

      </div>
      <div>
      {cardsJSX.slice(12,16)}

      </div>
      
    </div>
  );
}
}

export default App;
