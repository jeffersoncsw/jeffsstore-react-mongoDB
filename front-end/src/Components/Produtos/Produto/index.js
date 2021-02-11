import './Produto.css';

export default function Produto(props){    

    return(
      <div id={props.categoria} className="box_produtos">
        <div className={props.categoria}>
          <img src={require(`./img/${props.imagem}`).default} width="120px" alt=""/>
          <div>
            <p className="produtoName">{props.descricao}</p>
            <hr />
            <p className="produtoPrecoAntigo">De: R$ {props.preco}</p>
            <p className="produtoPreco">POR: R$ {props.precofinal}</p>
          </div>
        </div>
      </div>
    )
}