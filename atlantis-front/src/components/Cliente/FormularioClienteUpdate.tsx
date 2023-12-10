import { useState } from "react";
import axios from "axios";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dadosFicticios = {
    id: '100',
    nome: 'Fulano de Tal',
    nomeSocial: 'Beltrano de Tal',
    email: 'fulano@example.com',
    dn: '1990-01-01',
    cpf: '123.456.789-00',
    rg: '987654321',
    passaporte: 'ABC123XYZ',
    cep: '12345-678',
    endereco: 'Rua Fictícia, 123',
    numero: '456',
    complemento: 'Apto 101',
    bairro: 'Bairro Fictício',
    cidade: 'Cidade Fictícia',
    estado: 'UF',
    telefoneDDD: '11',
    telefoneNumero: '99999-9999'
};

const FormularioClienteUpdate = () => {
    const [cep, setCep] = useState<string>("");
    const [endereco, setEndereco] = useState<string>("");
    const [numero, setNumero] = useState<string | undefined>();
    const [complemento, setComplemento] = useState<string | undefined>();
    const [bairro, setBairro] = useState<string | undefined>();
    const [cidade, setCidade] = useState<string | undefined>();
    const [estado, setEstado] = useState<string | undefined>();
    const [telefoneDDD, setTelefoneDDD] = useState<string | undefined>();
    const [telefoneNumero, setTelefoneNumero] = useState<string | undefined>();

    const [clienteEditado, setClienteEditado] = useState({ ...dadosFicticios });


    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setClienteEditado({
          ...clienteEditado,
          [name]: value,
        });
      };
    
      const handleCepChange = async (e: { target: { value: any; }; }) => {
        const enteredCep = e.target.value;
        setClienteEditado({
          ...clienteEditado,
          cep: enteredCep,
        });
    
        const cepFormatado = enteredCep.replace(/\D/g, "");
        if (cepFormatado.length === 8) {
          try {
            const response = await axios.get(
              `https://brasilapi.com.br/api/cep/v1/${cepFormatado}`
            );
            const { neighborhood, state, city, street } = response.data;
            setClienteEditado({
              ...clienteEditado,
              bairro: neighborhood,
              estado: state,
              cidade: city,
              endereco: street,
            });
          } catch (error) {
            console.log(error);
          }
        }
      };

      const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Aqui você pode enviar os dados editados para o backend usando, por exemplo, axios.post ou axios.put
        console.log("Dados atualizados:", clienteEditado);
        // Lógica para enviar os dados para o backend...
      };

    return (
        <>
            <legend>
                <h4 className="border-bottom mb-1">Atualizar Dados do Cliente: #{dadosFicticios.id} - {dadosFicticios.nome}</h4>
            </legend>
            <form  onSubmit={handleSubmit}>                
                <div className="d-flex mb-2 align-items-center">
                    <label className="form-label">Nome:</label>
                    <input
                        className="form-control ms-2"
                        type="text"
                        id="floatingInputValue"
                        name="nome"
                        required
                        value={dadosFicticios.nome}
                    />
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <label className="form-label">Nome Social:</label>
                    <input
                        className="form-control ms-2"
                        type="text"
                        name="nome"
                        required
                        value={dadosFicticios.nomeSocial}
                    />
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <label className="form-label" htmlFor="email">
                        Email:
                    </label>
                    <input className="form-control ms-2" type="email" name="email" value={dadosFicticios.email} />
                    <label className="form-label ms-2" htmlFor="dnasc">
                        Data de Nascimento:
                    </label>
                    <input className="form-control ms-2 w-25" type="date" name="dnasc" value={dadosFicticios.dn} />
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <label className="form-label" htmlFor="cpf">
                        CPF:
                    </label>
                    <input className="form-control ms-2" type="text" name="cpf" value={dadosFicticios.cpf} />
                    <label className="form-label ms-2" htmlFor="rg">
                        RG:
                    </label>
                    <input className="form-control ms-2" type="text" name="rg" value={dadosFicticios.rg} />
                    <label className="form-label ms-2" htmlFor="passaporte">
                        Passaporte:
                    </label>
                    <input className="form-control ms-2" type="text" name="passaporte" value={dadosFicticios.passaporte} />
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
                        onChange={handleCepChange}
                        value={dadosFicticios.cep}
                    />
                    <label className="form-label ms-2" htmlFor="endereco">
                        Logradouro:
                    </label>
                    <input
                        className="form-control ms-2"
                        type="text"
                        value={dadosFicticios.endereco}
                        onChange={(event) => setEndereco(event.target.value)}
                    />
                    <label className="form-label ms-2" htmlFor="numero">
                        Num.:
                    </label>
                    <input
                        className="form-control ms-2 w-25"
                        type="text"
                        value={dadosFicticios.numero}
                        onChange={(event) => setEndereco(event.target.value)}
                    />
                    <label className="form-label ms-2" htmlFor="complemento">
                        Complemento.:
                    </label>
                    <input
                        className="form-control ms-2 w-25"
                        type="text"
                        value={dadosFicticios.complemento}
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
                        value={dadosFicticios.bairro}
                        onChange={(event) => setBairro(event.target.value)}
                    />
                    <label className="form-label ms-2" htmlFor="cidade">
                        Cidade:
                    </label>
                    <input
                        className="form-control ms-2"
                        type="text"
                        value={dadosFicticios.cidade}
                        onChange={(event) => setCidade(event.target.value)}
                    />
                    <label className="form-label ms-2" htmlFor="estado">
                        Estado:
                    </label>
                    <input
                        className="form-control ms-2 w-25"
                        type="text"
                        value={dadosFicticios.estado}
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
                        value={dadosFicticios.telefoneDDD}
                    />
                    <input
                        className="form-control ms-2 w-25"
                        type="text"
                        placeholder="Número"
                        name="numero"
                        value={dadosFicticios.telefoneNumero}
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
                        Atualizar
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormularioClienteUpdate;
