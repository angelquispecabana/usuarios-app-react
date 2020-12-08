import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import UserService from '../services/UserService'
import Usuario from './Usuario';
import { useNotification } from "../notifications/NotificationProvider";

const Usuarios = () => {
    const [users, setUsers] = useState([]);
    const [userID, setUserID] = useState('');
    const [modalOpenDelete, setModalOpenDelete] = useState(false);
    const dispatch = useNotification();

    const handleDeleteNotification = () => {
        dispatch ({
            type: "ERROR",
            message: "Usuario Borrado",
            title: ""
        })
    }

    useEffect(()=>{
        UserService.getUsers()
            .then(response => {
                setUsers(response.data);
            })
    },[]);

    const handleDelete = (id) => {
        setUserID(id);
        setModalOpenDelete(true);
    }
    
    const deleteUserID = (id) => {
        UserService.deleteUser(id).then(() => {
            setUsers(users => {
                return users.filter(user => user.id !== id);
            });
            closeModal();
            handleDeleteNotification();
        });        
    }

    const confirmDelete = () => {
        deleteUserID(userID);
    }

    const closeModal = () => {
        setModalOpenDelete(false);
        setUserID('');
    }

    return (
        <div>
            <div className={
                clsx(
                    'modal',
                    {                        
                        'is-active': modalOpenDelete
                    }
                )
            }>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Eliminar Usuario</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <p>
                            ¿Desea borrar el usuario?
                        </p>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={confirmDelete}>Eliminar</button>
                        <button className="button" onClick={closeModal}>Cancelar</button>
                    </footer>
                </div>
            </div>

            <h1>Lista de Usuarios</h1>
            <Link to='users/new' className='button is-link m-2'>
                Crear Usuario
            </Link>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Nombres</td>
                            <td>Apellidos</td>
                            <td>Email</td>
                            <td>Cargo</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <Usuario
                                key={`Users-list-${user.id}`}
                                index={index + 1}
                                user={user}
                                deleteFn = {handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Usuarios
