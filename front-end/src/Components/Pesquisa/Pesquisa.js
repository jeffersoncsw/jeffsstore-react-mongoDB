import { Form, Button} from 'react-bootstrap';

export default function Pesquisa(){

    const digitaPesquisa = (e)=> {
        const valor = e.target.value;
        console.log(valor);

        const url = `url?pesquisa=${valor}`;
        fetch(url).then(resposta => resposta.json()).then(resultado => console.log(resultado));
    }

    return(
        <div className="row"> 
            <div className="col-lg-12 col-sm-12 mx-auto">
                <Form>
                    <Form.Label>Pesquisar</Form.Label>
                    <Form.Group type="text" onKeyUp={digitaPesquisa}/>
                </Form>
            </div>
        </div>

    )
}