import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import friends from "./friends.json";
import './App.css';

class App extends Component {
  
  state = {
    friends: friends,
    curScore: 0,
    topScore: 0,
    unselectedCards: friends
  };

  componentDidMount() {
  }

  shuffleArray = array => {
    var j, x, i;
    for (i = array.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
  }

  selectSpace = spaceName => {
    const findCard = this.state.unselectedCards.find(item => item.spaceName === spaceName);

    if (findCard === undefined) {
      this.setState({
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        friends: friends,
        unselectedCards: friends
    });
  }
  else {
    const newCards = this.state.unselectedCards.filter(item => item.spaceName !== spaceName);
    
    this.setState({
      curScore: this.state.curScore + 1,
      friends: friends,
      unselectedCards: newCards
    });
  }

  this.shuffleArray(friends);
};

  render() {
    return (
      <Wrapper>
      <Nav
        curScore={this.state.curScore}
        topScore={this.state.topScore} 
        />
        <Title />
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            spaceName={friend.spaceName}
            image={friend.image}
            selectSpace={this.selectSpace}
            curScore={this.state.curScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
