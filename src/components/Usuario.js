import { Link } from 'react-router-dom';

const Usuario = ({user, index, deleteFn}) => {
    const handleClick = () => {
        deleteFn(user.id)
    }

    return (
        <tr>
            <td>{index}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                <Link to={`/users/${user.id}`} className='button is-small is-info mr-1'>Editar</Link>
                <button onClick={handleClick} className='button is-small is-danger'>Eliminar</button>
            </td>
        </tr>
    )
}

export default Usuario
