import TipoCadastrarHospedagem from "../components/Hospedagem/TipoCadastrarHospedagem";
import AtualizarCliente from "../pages/Clientes/AtualizarCliente";
import CadastrarCliente from "../pages/Clientes/CadastrarCliente";
import ListarClientes from "../pages/Clientes/ListarClientes";
import VisualizarCliente from "../pages/Clientes/VisualizarCliente";
import Home from "../pages/Home";
import ListarTiposAcomodacoes from "../components/ListarAcomodacoes";
import Template from "../templates/Template";
import ExibirAcomodacoes from "../pages/Hospedagem/ExibirAcomodacoes";

export default [
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/cadastrarcliente",
        element: <CadastrarCliente />,
      },
      {
        path: "/listarclientes",
        element: <ListarClientes />,
      },
      {
        path: "/visualizarcliente/:id",
        element: <VisualizarCliente />,
      },
      {
        path: "/atualizarcliente/:id",
        element: <AtualizarCliente />,
      },
      {
        path: "/listaracomodacoes",
        element: <ExibirAcomodacoes />,
      },      
      {
        path: "/cadastrarhospedagem",
        element: <TipoCadastrarHospedagem />,
      },
    ],
  },
];
