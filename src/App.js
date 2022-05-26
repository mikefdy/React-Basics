import React, {Component} from 'react';
import {robots} from './Robots.js'
import CardList from './CardList.js';
import Searchbox from './Searchbox.js'
import './App.css'

//global parent app reuniting each component
class App extends Component {
  constructor(){
    super()
    this.state = {
      robot: robots,
      searchfield:''
    }
  }

  //event handler function whenever someone types in the search bar, changes the search value for the cards
  onSearchChange = (event) =>{
    this.setState({searchfield : event.target.value})
    //event.target.value shows the actual user input on the console console.log(event.target.value); 
    //const filterRobots = this.state.robot.filter(robots =>{
    //return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); // if the robot name in lowercase equals(the includes function does the compairison) whatever was typed in the search field return 

  }




  render(){
    const filterRobots = this.state.robot.filter(robots =>{ return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());}) //comparing name and displaying output
    return(
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <Searchbox searchChange = {this.onSearchChange}/>
        <CardList robot={filterRobots}/>       
      </div>
    );
    
  }//with robot = filterRobot, only display the right or requested robot
}
 
export default App;