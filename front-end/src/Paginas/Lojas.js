import '../App.css';

export default function Lojas(){
    return(

      <div className="container-fluid">
        <div className="mt-2"><h2>Nossas Lojas</h2></div>
        <hr className="my-2"/>
        <div className="row">
          <div className="col-sm-4 loja"> 
            <h3>São Paulo</h3>
            <p>Rua Oscar Freire, 540</p>
            <p>Jardins</p>
            <p>(11) 4004-4414</p>
          </div>
          <div className="col-sm-4 loja ">
            <h3>Guarulhos</h3>
            <p>Av. Paulo Faccini, 1345</p>
            <p>5 &ordm; andar</p>
            <p>Jardim Maia</p>
            <p>(11) 2414-9999</p>
          </div>
          <div className="col-sm-4 loja">
            <h3>Osasco</h3>
            <p>Av. dos Autonomistas, 2340</p>
            <p>Cidade de Deus</p>
            <p>(11) 2222-3333</p>
          </div>
        </div>
      </div>
    )
}