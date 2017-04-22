import { Component } from '../../angular/core';
import template from './users.details.component.html'

@Component({
    template,
    bindings: {
        onUpdate: '&',
        onDelete: '&',
        data: '<'
    }
})

export default class UsersDetails {
    showUpdateForm(user) {
        return this.onUpdate({ $event: { user } })
    }

    deleteUser(id) {
        this.onDelete({ $event: { id } })
    }
}