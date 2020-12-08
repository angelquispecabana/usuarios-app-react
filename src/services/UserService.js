import axios from 'axios';

const API = 'http://localhost:5000/users';

const getUsers = () => {
    return axios.get(API);
};

const getUserById = (id) => {
    return axios.get(`${API}/${id}`);
};

const updateUser = (user) => {
    return axios.put(`${API}/${user.id}`,user);
};

const deleteUser = (id) => {
    return axios.delete(`${API}/${id}`);
};

const createUser = (user) => {
    return axios.post(API, {...user, id: Date.now()}, {
        headers: {
			authorization: 'Bearer $ewriw923i49i324234234'
		}
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser
}