import template from './users.form.component.html'

class UsersFormController {
    submitForm(user) {
        if (this.button === 'Create') {
            return this.onSubmit({ $event: { type: 'create', user } })
        }
        this.onSubmit({ $event: { type: 'update', user } })
    }
}

export default {
    bindings: {
        onSubmit: '&',
        button: '<',
        data: '<'
    },
    controller: UsersFormController,
    template
}