import React, { Component } from "react"; 
import axios from 'axios';
import './styles.css'
class App extends Component {
  
  state = { advice:''}

  componentDidMount(){
      //console.log('Component did mount')
      this.fetchAdvice();
      
  }

  fetchAdvice = async ()=>{
    await axios.get('https://api.adviceslip.com/advice')
      .then((response) => {

          const {advice}= response.data.slip;
          //console.log(advice)

          this.setState({ advice });
      })
      .catch((err) => {
        console.log(err)
        
      });
  }

  render() {
    
    const {advice}=this.state;

    return (
     <div className="app">
       <div className="card">
        <h1 className="heading">{advice}</h1>
         
        
        <button className="button" onClick={this.fetchAdvice}>
          <span> GIVE ME ADVICE! </span>
        </button>
       </div> 
     </div>
    );
  }
}

export default App ;