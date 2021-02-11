import { useState, useEffect} from 'react';

import Produto from './Produto'
import {Container, Row} from 'react-bootstrap';
import Categorias from '../Categorias';

export default function Produtos(){

    const [produtos, setProdutos] = useState([])

    useEffect(()=> {
        async function fetchData(){
            const resposta = await fetch("http://localhost:1910/produtos")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();

    }, []);

    return(
      <Container>
        <Row>
          <div className="container-fluid">
            <div className="mt-2"><h2>Produtos</h2></div>
            <hr className="my-2"/>
          </div>

          <div className="col-sm-3" id="categorias">
            <Categorias />           
          </div>
                    
          <div className="produtos">
            {produtos.dados && produtos.dados.map(item => (
              <Produto 
                key={item.idproduto} 
                id={item.idproduto}
                categoria={item.categoria} 
                imagem={item.imagem}
                descricao={item.descricao}
                preco={item.preco}
                precofinal={item.precofinal} />))}
          </div>
        </Row>
      </Container>
        
    )
}