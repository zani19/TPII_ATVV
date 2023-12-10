import FamiliaMais from "@/assets/images/FamiliaMais.jpg"

const CardFamiliaMais = () => {
  return (
    
          <div className="col-12 mb-2">
            <div className="card shadow text-justify m-4 border">
              <img src={FamiliaMais} className="card-img-top " alt="Quarto Família Simples" style={{ maxWidth: "100%", height:"14rem"}}/>
              <div className="card-body" style={{ height: "10rem"}}>
            <h5 className="card-title">Família Mais</h5>
            <p className="card-text"> Perfeito para famílias maiores, este quarto Família Mais oferece dois espaçosos suítes, uma cama de casal, cinco camas de solteiro e duas garagens privativas. Amplo e versátil para acomodar todos com conforto.</p>
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
                    <td className='text-center'>5</td>
                    </tr>
                    <tr>
                    <td>Cama Casal</td>
                    <td className='text-center'>1</td>
                    </tr>
                    <tr>
                      <td>Suite</td>
                      <td className='text-center'>2</td>
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

export default CardFamiliaMais