import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import { CrearUsuario } from './components/CrearUsuario';
import { EditarUsuario } from './components/EditarUsuario';
import Usuarios from './components/Usuarios';

  const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Usuarios/>
                </Route>
                <Route path="/users/new">
                    <CrearUsuario/>
                </Route>
                <Route path="/users/:userId" component={EditarUsuario}/>
            </Switch>
        </Router>
    )
}

export default Routes;