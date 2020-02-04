import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fa from '@fortawesome/free-solid-svg-icons'

class Navigation extends Component {
  render() {
    return (
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
    )
  }
}

export default Navigation;