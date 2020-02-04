import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fa from '@fortawesome/free-solid-svg-icons'

class Secondary extends Component {
  render() {
    return (
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
    );
  }
}

export default Secondary