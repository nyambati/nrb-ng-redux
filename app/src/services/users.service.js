export default function UserService($http) {

    function createUser(user) {
        return $http.post(`/api/users`, user);
    }
    function getAllUsers() {
        return $http.get('/api/users');
    }

    function getOneUser(id) {
        return $http.get(`/api/users/${id}`)
    }

    function updateUser(user) {
        return $http.put(`/api/users/${user.id}`, user)
    }

    function deleteUser(id) {
        return $http.delete(`/api/users/${id}`)
    }

    return {
        createUser,
        getAllUsers,
        getOneUser,
        updateUser,
        deleteUser
    }
}