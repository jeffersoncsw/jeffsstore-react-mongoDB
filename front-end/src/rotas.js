import {Switch, Route} from 'react-router-dom';

import Produtos from './Components/Produtos/index.js';
import Pedidos from './Paginas/Pedidos';
import Lojas from './Paginas/Lojas';
import Contatos from './Paginas/Contatos';
import Home from './Paginas/Home';

function Rotas(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/produtos" component={Produtos} />
        <Route exact path="/pedidos" component={Pedidos} />
        <Route exact path="/lojas" component={Lojas} />
        <Route exact path="/contatos" component={Contatos} />
      </Switch>
    )
}

export default Rotas;