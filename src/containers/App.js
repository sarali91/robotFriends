import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
      // console.log("componentDidMount");
  }
  
  onClickDelete = (event) => {
    const deleteRobo = this.state.robots.filter(robot => {
      // console.log("onClickDelete: "+ typeof event.target.id + ", " + typeof robot.id);
      return robot.id.toString() !== event.target.id;
    });
    // console.log("after: ", deleteRobo);
    this.setState({ robots: deleteRobo });
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    // console.log("onSearchChange:"+event.target.value);

  }

  
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log("render");
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchfield = {this.state.searchfield} searchChange={this.onSearchChange} clickEnter={this.onClickEnter}/>
          <Scroll>
            <CardList robots={filteredRobots} clickDelete={this.onClickDelete}/>
          </Scroll>
        </div>
      );
  }
}

export default App;