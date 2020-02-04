import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import './App.css';
import Navigation from './components/Navigation'
import Secondary from './components/Secondary'
import Primary from './components/Primary'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid={true} className="h-100">
          <div className="row h-100">
            <Navigation />
            <Secondary />
            <Primary />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
