import {useEffect, useState} from 'react';

import {Form, Button} from 'react-bootstrap';

import Email from '../Components/Produtos/Produto/img/imagem-email.png';
import Whatsapp from '../Components/Produtos/Produto/img/imagem-whatsapp.png';

import ListarContatos from '../Components/Contatos/ListarContatos.js';

import '../App.css';

export default function Contatos(){

    const [ contatos, setContatos ] = useState([])

    const controleEnvio = async (e) => {
        

        const url = "http://localhost:1910/contatos";
        let dados = {
          nome: e.target.nome.value,
          email: e.target.email.value,
          mensagem: e.target.mensagem.value
        }

        const cabecalho = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
            },
          body:JSON.stringify(dados)
      };

      await fetch(url,cabecalho);
      e.preventDefault();
      
    }

    useEffect(() => {
        async function listaContatos(){
            const url = "http://localhost:1910/listarcontatos";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setContatos(resultado);
        }
        listaContatos();
    },[contatos]);

   return(
     <div className="container" >
       <div className="mt-2"><h2>Contatos</h2></div>
       <hr className="my-2"/>
       <div className="row menuContatos">   
         <div class="col-sm-6">
           <img src={Email} alt="Email" style={{width: "10%", height: "50px"}}/>
           contato@jeffsstore.com.br
         </div>
         <div class="col-sm-6">
           <img src={Whatsapp} alt="WhatsApp" style={{width: "10%", height: "50px"}}/>
           (11) 98888-9999
         </div>
       </div>
       <div className=" col-lg-6 col-md-5 mx-auto jumbotron p-3 align-items-center">
         <Form className="col" onSubmit={controleEnvio}>
           <Form.Group>
             <Form.Label>Nome:</Form.Label>
             <Form.Control type="text" name="nome" placeholder="Nome" />
           </Form.Group>
           <Form.Group>
             <Form.Label>Email:</Form.Label>
             <Form.Control type="email" name="email" placeholder="Seu melhor e-mail" />
           </Form.Group>
           <Form.Group>
             <Form.Label>Mensagem: </Form.Label>
             <Form.Control as="textarea" name="mensagem" rows={4} placeholder="Digite aqui sua mensagem" />
           </Form.Group>
           <Button type="submit" variant="success">Enviar</Button>
         </Form>
       </div>
       <div className="row">
         <div className="mx-auto"><h2>Lista de Contatos</h2></div>
         <div className="col-lg-12 col-md-12 mx-auto">
           <table className="table table-striped">
             <thead>
               <tr>
                 <td></td>
                 <td>Nome</td>
                 <td>Email</td>
                 <td>Mensagem</td>
               </tr>
             </thead>
             <tbody>
               {contatos.dados && contatos.dados.map(item => (<ListarContatos 
                 key={item.idcontato}
                 idcontato={item.idcontato} 
                 nome={item.nome} 
                 email={item.email}
                 mensagem={item.mensagem}
                        />))}
             </tbody>
           </table>
         </div>
       </div>
     </div>

   )
}