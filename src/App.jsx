import React, {Component} from 'react';
import {aboutMe} from './resources.js'

class App extends Component {
  render() {
    console.log(aboutMe, 'about me')

    return (
      <div className='parent'>
        <div className='child'> 
          <div className='card-element'> <a> Resume </a> </div>
          <div className='card-element'> <a> Blog </a> </div>
          <div className="wrapper">
              <div className="item1">Item 1</div>
              <div className='item2'>Item 2 </div>
          </div>

        </div>
  
    
    </div>
    );
  }
}
export default App;
