import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./style.scss";
import BodyHeader from "../components/Header/BodyHeader";

const Template = () => { 

  const voltar = () => {
    window.history.back();
  };

  return (
    <>
      <Navbar />

      <div className="bodyPage">        
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Template;
