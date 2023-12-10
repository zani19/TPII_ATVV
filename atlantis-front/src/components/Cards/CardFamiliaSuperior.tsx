import FamiliaSuperior from "@/assets/images/FamiliaSuperior.jpg"

const CardFamiliaSuperior = () => {
  return (
    
          <div className="col-12 mb-2">
            <div className="card shadow text-justify m-4 border">
              <img src={FamiliaSuperior} className="card-img-top " alt="Quarto Família Simples" style={{ maxWidth: "100%", height:"14rem"}}/>
              <div className="card-body" style={{ height: "10rem"}}>
            <h5 className="card-title">Família Superior</h5>
            <p className="card-text"> O quarto Família Superior é um espaço excepcional, composto por três suítes, duas camas de casal e seis camas de solteiro. Oferece muito conforto, amplo espaço e privacidade para cada membro da família.</p>
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
                    <td className='text-center'>6</td>
                    </tr>
                    <tr>
                    <td>Cama Casal</td>
                    <td className='text-center'>2</td>
                    </tr>
                    <tr>
                      <td>Suite</td>
                      <td className='text-center'>3</td>
                    </tr>
                    <tr>
                      <td>Garagem</td>
                      <td className='text-center'>2</td>
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

export default CardFamiliaSuperior