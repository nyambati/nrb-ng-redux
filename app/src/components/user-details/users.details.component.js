import template from './users.details.component.html'

class UsersDetailsController {
    showUpdateForm(user) {
        return this.onUpdate({ $event: { user } })
    }

    deleteUser(id) {
        this.onDelete({ $event: { id } })
    }
}

export default {
    bindings: {
        onUpdate: '&',
        onDelete: '&',
        data: '<'
    },
    controller: UsersDetailsController,
    template
}