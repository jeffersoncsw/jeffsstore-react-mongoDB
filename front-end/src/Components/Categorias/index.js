import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

import './Categorias.css';

export default function Categorias() {
    function ExibirCategoria(evento) {
        const categoria = evento.target.id;
        let elementos = document.getElementsByClassName('box_produtos');
        console.log(elementos);
        for (let i = 0; i < elementos.length; i++) {
            console.log(elementos[i].id);
            if (categoria === elementos[i].id) {
                elementos[i].style = "display:inline-block";
            } else {
                elementos[i].style = "display:none";
            }
        }
    }

    let ExibirTodos = () => {
        let elementos = document.getElementsByClassName('box_produtos');
        for(let i = 0; i < elementos.length; i++){
            elementos[i].style = "display:inline-block";
        }
    };

    return(
      <div >
        <div><h3>Categorias</h3></div>
        <ButtonGroup vertical>
          <Button variant="outline-primary" size="lg" onClick={ExibirTodos}>
            Todos {12}
          </Button>
          <Button id="notebook" variant="outline-primary" size="lg" onClick={ExibirCategoria}>
            Notebook {3}
          </Button>
          <Button id="teclado" variant="outline-primary" size="lg" onClick={ExibirCategoria}>
            Teclado {2}
          </Button>
          <Button id="impressora" variant="outline-primary" size="lg" onClick={ExibirCategoria}>
            Impressora {3}
          </Button>
          <Button id="tablet" variant="outline-primary" size="lg" onClick={ExibirCategoria}>
            Tablet {2}
          </Button>
          <Button id="mouse" variant="outline-primary" size="lg" onClick={ExibirCategoria}>
            Mouse {2}
          </Button>
        </ButtonGroup>
      </div>
    )
}