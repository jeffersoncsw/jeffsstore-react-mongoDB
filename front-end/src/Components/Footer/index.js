import React from 'react';
import './Footer.css';
import FormPagamento from '../Produtos/Produto/img/formas-pagamento.png';

function Footer(){
    return(
      <div className="main-footer text-center mt-3 font-small text-white-50 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h4 className="text-white pt-3">Formas de pagamento</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <img src={FormPagamento} style={{width: "50%", height: "100px"}} alt="Formas de pagamento"/>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col footer-copyright py-3">
              Jeff's Store © 2020 - Todos os direitos reservados
            </div>
          </div> 
        </div>
      </div>
    )
}

export default Footer;