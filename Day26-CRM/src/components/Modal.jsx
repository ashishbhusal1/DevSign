function Modal({ close, onConfirm }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="box">
          <h2>Do you want to delete?</h2>
        </div>
        <div className="button">
          <div className="btn-primary" onClick={close}>
            <p>Close</p>
          </div>
          <div className="btn-secondary" onClick={onConfirm}>
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
