import "./style.scss";

const Modal = (props: { showModal: any; handler: any; header: any; footer: any; children: any; }) => {
  const { showModal, handler, header, footer, children } = props;
  

  return (
    <>
      <div
        className={`modal ${showModal ? "show" : ""}`}        
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-4">{header && header()}</div>
              <div className="col-4 text-center">
                <h3                  
                  className="mx-auto"
                >Atlantis</h3>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <button className="btn-close" onClick={() => handler(false)} />
              </div>
            </div>

            <div className="modal-body">{children}</div>

            {footer && <div className="modal-footer">{footer()}</div>}
          </div>
        </div>
      </div>

      <div className={`modal-backdrop ${showModal ? "show" : ""}`} />
    </>
  );
};

export default Modal;
