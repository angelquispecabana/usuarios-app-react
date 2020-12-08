import { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import UsuarioForm from "./UsuarioForm"
 
export const EditarUsuario = ({ match, history }) => {
    const [user, setUser] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const { userId } = match.params;

    useEffect(() => {
        UserService.getUserById(userId)
            .then(response => {
                setUser(response.data);
                setLoaded(true)})
            .catch(err => {
                console.log('Error',err);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (user) => {
        UserService.updateUser({ ...user, id : userId })
            .then(response => {
                history.replace('/');
            });
    };
    
    const gotoBack = () => {
        history.goBack();
    }

    return (
        <div className="content">
			<h2 className="has-text-centered m-5">Editar Usuario</h2>
			<div className="columns">
				<div className="column is-three-fifths is-offset-one-fifth">
                    {loaded ? (<UsuarioForm 
                        onSubmit={handleSubmit}
                        onCancel={gotoBack}
                        user = {user}/>) : null}
				</div>
			</div>
		</div>
    )
}