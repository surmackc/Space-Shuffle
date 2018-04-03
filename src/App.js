import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navpills from "./components/Navpills";
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



  removeFriend = id => {
    
    const friends = this.state.friends.filter(friend => friend.id !== id);
    
    this.setState({ friends });
  };


  render() {
    return (
      <Wrapper>
      <Navpills
        curScore={this.state.curScore}
        topScore={this.state.topScore} 
        />
        <Title />
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
