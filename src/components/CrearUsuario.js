import { useHistory } from 'react-router-dom'
import UserService from '../services/UserService';
import UsuarioForm from "./UsuarioForm"
import { useNotification } from "../notifications/NotificationProvider";
import { SUCCESS } from '../actions/notificationsActions';
 
export const CrearUsuario = () => {
    const history = useHistory();
    const dispatch = useNotification();

    const handleSuccessNotification = () => {
        dispatch ({
            type: SUCCESS,
            message: "Usuario Creado",
            title: ""
        })
    }

    const handleSubmit = (user) => {
        UserService.createUser(user)
            .then(response => {
                handleSuccessNotification();
                history.replace('/');
            });
    };
    
    const gotoBack = () => {
        history.goBack();
	}
	
    return (
        <div className="content">
			<h2 className="has-text-centered m-5">Crear Usuario</h2>
			<div className="columns">
				<div className="column is-three-fifths is-offset-one-fifth">
					<UsuarioForm 
						onSubmit={handleSubmit}
                        onCancel={gotoBack}
                        user = {{}}/>
				</div>
			</div>
		</div>
    )
}
