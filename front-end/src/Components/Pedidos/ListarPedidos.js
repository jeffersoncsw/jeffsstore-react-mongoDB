export default function ListarPedidos(props){
    return(
      <tr>
        <td>{props.idpedido}</td>
        <td>{props.nome_cliente}</td>
        <td>{props.nome_produto}</td>
        <td>{props.valor_unitario}</td>
        <td>{props.quantidade}</td>
        <td>{props.valor_total}</td>
      </tr>
    )
}