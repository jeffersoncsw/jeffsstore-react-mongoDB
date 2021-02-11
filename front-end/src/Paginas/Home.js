import {Row} from 'react-bootstrap';

export default function Home(props){

    return(
      <Row onLoad={saudacao}>
        <div className="container m-2 p-0">
          <div>
            <h2><span id="msg_abertura"></span> Seja bem vindo(a)!</h2>
            <p>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>
          </div>
        </div>
      </Row>
    )
}

function saudacao(){
    let data = new Date();
    let hora = data.getHours();

    if (hora < 12){
        document.getElementById("msg_abertura").innerHTML = "Bom dia!";
    }else if(hora < 18){    
        document.getElementById("msg_abertura").innerHTML = "Boa tarde!";
    }else {
        document.getElementById("msg_abertura").innerHTML = "Boa noite!";
    }
}