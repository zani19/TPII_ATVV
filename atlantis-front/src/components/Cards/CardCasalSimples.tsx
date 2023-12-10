import CasalSimples from "@/assets/images/CasalSimples.jpg"
import style from './style.scss'

const CardCasalSimples = () => {
  return (
    
          <div className="col-12 mb-2">
            <div className="card shadow text-justify m-4 border">
              <img src={CasalSimples} className="card-img-top " alt="Quarto Casal Simples" style={{ maxWidth: "100%", height:"14rem"}}/>
              <div className="card-body" style={{ height: "10rem"}}>
            <h5 className="card-title">Casal Simples</h5>
            <p className="card-text">  Com todas as características do Quarto Solteiro Plus, este oferece um espaço ampliado para mais conforto. Cama de casal e garagem privativa proporcionam uma estadia relaxante e conveniente.</p>
              </div>
              <div className='m-3'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Descrição</th>
                      <th className='text-center'>Quantidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>Cama Solteiro</td>
                    <td className='text-center'>N/A</td>
                    </tr>
                    <tr>
                    <td>Cama Casal</td>
                    <td className='text-center'>1</td>
                    </tr>
                    <tr>
                      <td>Suite</td>
                      <td className='text-center'>1</td>
                    </tr>
                    <tr>
                      <td>Garagem</td>
                      <td className='text-center'>1</td>
                    </tr>
                    <tr>
                      <td>Ar Condicionado</td>
                      <td className='text-center'>1</td>
                    </tr>
                    <tr>
                      <td>Wi-Fi de Alta Velocidade</td>                      
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-body">
                <a href="#" className="card-link">Reservar</a>
              </div>
            </div>
          </div>
    
  )
}

export default CardCasalSimples