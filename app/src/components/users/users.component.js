import template from './users.component.html'

class UsersComponentController {
    constructor(UsersService, $scope) {
        this.button = 'Create'
        this.Users = UsersService;
        this.scope = $scope;
    }

    fetch() {
        this.Users.getAllUsers()
            .then(response => this.users = response.data)
            .catch(error => console.log(error.data));
    }

    reset() {
        this.user = {}
        this.showUserForm = false;
    }

    $onInit() {
        this.fetch()
    }

    submitForm({ user, type }) {
        if (type === "create") {
            return this.addUser(user)
        }
        this.updateUser(user);
        this.reset()

    }

    addUser(user) {
        return this.Users.createUser(user)
            .then(response => {
                console.log(response.data);
                this.reset()
            })
            .catch(error => console.log(error.data));
    }

    showUpdateForm({ user }) {
        this.user = angular.copy(user);
        this.showUserForm = true;
        this.button = "Update";
    }

    updateUser(user) {
        this.Users.updateUser(user)
            .then(response => console.log(response))
            .catch(error => console.log(error.data));

    }

    deleteUser({ id }) {
        this.Users.deleteUser(id)
            .then(response => console.log(response))
            .catch(error => console.log(error.data));
    }
}

export default {
    controller: UsersComponentController,
    template
}