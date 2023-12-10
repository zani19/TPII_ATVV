import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons/faLeftLong";

const BodyHeader = (props: { title: any }) => {
  const {
    title,
  } = props;

  const home = [`/`];
  const esconderBotao = home.includes(location.pathname);

  const voltar = () => {
    window.history.back();
  };

  return (
    <div className="BodyHeader mb-3">
      <div className="p-2">
        <div className="d-flex justify-content-between">
          <h2>{title || "Atlantis Resort"}</h2>
          <div className="d-flex align-items-center">
            {!(esconderBotao) && (
              <button
                type="button"
                className="btn btn-outline-dark ms-2 d-flex align-items-center fw-bold"
                onClick={voltar}
              >                
                <FontAwesomeIcon icon={faLeftLong} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyHeader;
