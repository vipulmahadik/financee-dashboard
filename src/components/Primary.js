import React, {Component} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as fa from '@fortawesome/free-solid-svg-icons'

class Primary extends Component {
  render() {
    return (
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
    );
  }
}

export default Primary