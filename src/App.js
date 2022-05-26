import React, {Component} from 'react';
import CardList from './CardList.js';
import Searchbox from './Searchbox.js'
import './App.css'
import Scroll from './Scroll.js'

//global parent app reuniting each component
class App extends Component {
  constructor(){
    super()
    this.state = {
      robot: [],
      searchfield:''
    }
  }

  //updating state lifecycle, from empty array to asssigning robot:robots array
  //fetch is a https request method
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json();})
    .then(users =>{ this.setState({robot:users}) })
   
  }

  //event handler function whenever someone types in the search bar, changes the search value for the cards
  onSearchChange = (event) =>{
    this.setState({searchfield : event.target.value})
    //event.target.value shows the actual user input on the console console.log(event.target.value); 
    //const filterRobots = this.state.robot.filter(robots =>{
    //return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); // if the robot name in lowercase equals(the includes function does the compairison) whatever was typed in the search field return 

  }


//className = insert tachyon attributes
  render(){
    const filterRobots = this.state.robot.filter(robots =>{ return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());}) //comparing name and displaying output
    if(this.state.robot.length === 0){
      return <h1 className='tc'>Loading...</h1>
    }else{
      return(
        <div className='tc'> 
          <h1 className='f1'>RoboFriends</h1>
          <Searchbox searchChange = {this.onSearchChange}/>
           <Scroll>                                                                    
          <CardList robot={filterRobots}/>  
          </Scroll>     
        </div>
      );
    }
    
  }//with robot = filterRobot, only display the right or requested robot
   //Scrolling Tag adds scrolling windowto the cardslist 
}
 
export default App;