import { Component } from '../../angular/core';
import template from './users.component.html'

@Component({
    template
})

export default class UsersList {
    constructor(UsersService) {
        this.button = 'Create'
        Object.assign(this, UsersService);
    }

    fetch() {
        this.getAllUsers()
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

        this.updateUser(user)
            .then(response => console.log(response))
            .catch(error => console.log(error.data));
        this.reset()

    }

    addUser(user) {
        return this.createUser(user)
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

    delete({ id }) {
        this.deleteUser(id)
            .then(response => console.log(response))
            .catch(error => console.log(error.data));
    }
}