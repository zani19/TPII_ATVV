import { useState } from "react";
import axios from "axios";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormularioClienteCreate = () => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleCepChange = (e: { target: { value: any } }) => {
    const enteredCep = e.target.value;
    setCep(enteredCep);
    const cepFormatado = enteredCep.replace(/\D/g, "");
    console.log(cepFormatado);
    if (cepFormatado.length === 8) {
      searchCep(cepFormatado);
    }
  };

  const searchCep = async (cepFormatado: any) => {
    try {
      const response = await axios.get(
        `https://brasilapi.com.br/api/cep/v1/${cepFormatado}`,
      );
      console.log(response.data);
      setBairro(response.data.neighborhood);
      setEstado(response.data.state);
      setCidade(response.data.city);
      setEndereco(response.data.street);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <legend>
        <h4 className="border-bottom mb-1">Dados de Cadastro</h4>
      </legend>
      <form>
        <div className="d-flex mb-2 align-items-center">
          <label className="form-label">Nome:</label>
          <input
            className="form-control ms-2"
            type="text"
            id="floatingInputValue"
            name="nome"
            required
          />
        </div>
        <div className="d-flex mb-2 align-items-center">
          <label className="form-label">Nome Social:</label>
          <input
            className="form-control ms-2"
            type="text"
            name="nome"
            required
          />
        </div>
        <div className="d-flex mb-2 align-items-center">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input className="form-control ms-2" type="email" name="email" />
          <label className="form-label ms-2" htmlFor="dnasc">
            Data de Nascimento:
          </label>
          <input className="form-control ms-2 w-25" type="date" name="dnasc" />
        </div>
        <div className="d-flex mb-2 align-items-center">
          <label className="form-label" htmlFor="cpf">
            CPF:
          </label>
          <input className="form-control ms-2" type="text" name="cpf" />
          <label className="form-label ms-2" htmlFor="rg">
            RG:
          </label>
          <input className="form-control ms-2" type="text" name="rg" />
          <label className="form-label ms-2" htmlFor="passaporte">
            Passaporte:
          </label>
          <input className="form-control ms-2" type="text" name="passaporte" />
        </div>

        <legend className="mt-2 border-bottom">
          <h5>Endereço:</h5>
        </legend>

        <div className="d-flex mb-2 align-items-center">
          <label className="form-label ms-2" htmlFor="cep">
            CEP:
          </label>
          <input
            className="form-control ms-2 w-25"
            type="text"
            value={cep}
            onChange={handleCepChange}
          />
          <label className="form-label ms-2" htmlFor="endereco">
            Logradouro:
          </label>
          <input
            className="form-control ms-2"
            type="text"
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
          />
          <label className="form-label ms-2" htmlFor="numero">
            Num.:
          </label>
          <input
            className="form-control ms-2 w-25"
            type="text"
            value={numero}
            onChange={(event) => setEndereco(event.target.value)}
          />
          <label className="form-label ms-2" htmlFor="complemento">
            Complemento.:
          </label>
          <input
            className="form-control ms-2 w-25"
            type="text"
            value={complemento}
            onChange={(event) => setEndereco(event.target.value)}
          />
        </div>
        <div className="d-flex mb-2 align-items-center">
          <label className="form-label ms-2" htmlFor="bairro">
            Bairro:
          </label>
          <input
            className="form-control ms-2 w-50"
            type="text"
            value={bairro}
            onChange={(event) => setBairro(event.target.value)}
          />
          <label className="form-label ms-2" htmlFor="cidade">
            Cidade:
          </label>
          <input
            className="form-control ms-2"
            type="text"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          />
          <label className="form-label ms-2" htmlFor="estado">
            Estado:
          </label>
          <input
            className="form-control ms-2 w-25"
            type="text"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
          />
        </div>

        <legend className="mt-2 border-bottom">
          <h5>Telefones:</h5>
        </legend>

        <div className="d-flex mb-2 align-items-center">
          <label className="form-label ms-2">Telefone:</label>
          <input
            className="form-control ms-2 w-25"
            type="text"
            placeholder="DDD"
            name="ddd"
          />
          <input
            className="form-control ms-2 w-25"
            type="text"
            placeholder="Número"
            name="numero"
          />
          <button type="button" className="btn btn-danger ms-2">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button type="button" className=" ms-2 btn btn btn-success">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="d-flex mb-2 align-items-center justify-content-end">
          <button className="btn btn-primary" type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormularioClienteCreate;
