import { Component } from '../../angular/core';
import template from './users.form.component.html';

@Component({
    template,
    bindings: {
        onSubmit: '&',
        button: '<',
        data: '<'
    }
})

export default class UsersForm {
    submitForm(user) {
        if (this.button === 'Create') {
            return this.onSubmit({ $event: { type: 'create', user } })
        }
        this.onSubmit({ $event: { type: 'update', user } })
    }
}