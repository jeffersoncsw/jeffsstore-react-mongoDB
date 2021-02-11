export default function ListarContatos(props){
    return(
      <tr>
        <td>{props.idcontato}</td>
        <td>{props.nome}</td>
        <td>{props.email}</td>
        <td>{props.mensagem}</td>
        <td>{props.datacontato}</td>
      </tr>
    )
}