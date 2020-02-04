import React from 'react';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fa from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid={true} className="h-100">
        <div className="row h-100">
          <div className="col-1 h-100 d-flex flex-column justify-content-between shadow-it" style={ {background: 'white', zIndex: 1} }>
            <div className="row d-flex justify-content-center">
              <button type="button" className="my-2 btn btn-light">
                <FontAwesomeIcon icon={fa.faCreditCard} />
              </button>
            </div>
            <div className="row d-flex flex-column justify-content-center align-items-center">
              <button type="button" className="my-2 btn btn-light">
                <FontAwesomeIcon icon={fa.faCreditCard} />
              </button>
              <button type="button" className="my-2 btn btn-light">
                <FontAwesomeIcon icon={fa.faFile} />
              </button>
              <button type="button" className="my-2 btn btn-light">
                <FontAwesomeIcon icon={fa.faPiggyBank} />
              </button>
              <button type="button" className="my-2 btn btn-light">
                <FontAwesomeIcon icon={fa.faFolder} />
              </button>
              <button type="button" className="my-2 btn btn-light">
                <FontAwesomeIcon icon={fa.faArrowLeft} />
              </button>
            </div>
            <div className="row d-flex justify-content-center">
              <button type="button" className="my-2 btn btn-light">
                <FontAwesomeIcon icon={fa.faCreditCard} />
              </button>
            </div>
          </div>
          <div className="col-3 d-flex flex-column no-overflow-y" style={{background: '#f6f8fc'}}>
            <div className="row">
              <div className="col-12 header-area">
                <h2>Header Area</h2>
              </div>
            </div>
            <div className="row flex-grow-1">
              <div className="col-12">
                Content Area
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center footer-area">
                <button type="button" className="my-2 btn btn-light">
                  <FontAwesomeIcon icon={fa.faPlusCircle} /> Add a new card
                </button>
              </div>
            </div>
          </div>
          <div className="col-8 d-flex flex-column no-overflow-y">
            <div className="row">
              <div className="col-12 header-area">
                Header Area
              </div>
            </div>
            <div className="row flex-grow-1">
              <div className="col-12">
                Content Area
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
