import React,{Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      input: '',
    }
  }


  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit=()=>{
    console.log('click');
  }
  render(){ 
  
    return (
      
      <div className="App">
         <Navigation/>
         <ImageLinkForm 
         onInputChange={this.onInputChange}
         onButtonSubmit/>
         <Rank />
      </div>
    );
  }
  
}

export default App;
