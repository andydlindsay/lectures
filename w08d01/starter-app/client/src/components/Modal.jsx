import {useState, useEffect} from 'react';

import '../styles/Modal.scss';

const Modal = (props) => {
  const [park, setPark] = useState(null);

  useEffect(() => {
    fetch(`/api/parks/${props.selectedParkId}`)
      .then(res => res.json())
      .then(park => setTimeout(() => setPark(park), 3000));
  }, [props.selectedParkId]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={props.closeModal} className="close">&times;</span>
        { !park && <h2>Spinner...</h2> }
        { park &&
          <div> 
            <h2>Name: {park.name}</h2>
            <h2>Location: {park.location}</h2>
            <h2>Description: {park.description}</h2>
            <h2>Wildlife: {park.wildlife}</h2>
          </div>
        }
      </div>
    </div>
  );
};

export default Modal;
