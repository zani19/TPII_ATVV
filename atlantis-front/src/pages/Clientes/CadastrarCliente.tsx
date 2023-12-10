import React from "react";
import FormularioClienteCreate from "../../components/Cliente/FormularioClienteCreate";
import BodyHeader from "../../components/Header/BodyHeader";

const CadastrarCliente = () => {
  return (
    <>
    <div>
        <BodyHeader title={"Cadastrar Cliente"}/>
      </div>
      <FormularioClienteCreate />
    </>
  );
};

export default CadastrarCliente;
