import React from 'react';

function handleClick() {

}

function Modal({currentPhoto, onClose}) {

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">Photo Name</h3>
                <img alt="current category" />
                <p>
                    Photo Description
          </p>
                <button type="button" onClick={onClose}>
                    Close this modal
          </button>
            </div>
        </div>
    );
}

export default Modal;