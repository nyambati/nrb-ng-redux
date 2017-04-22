import { NgModule, bootstrap } from './angular/core';

import UsersComponent from './components/users/users.component';
import UsersDetailsComponent from './components/user-details/users.details.component';
import UsersFormComponent from './components/user-form/users.form.component';
import UsersService from './services/users.service';

@NgModule({
    name: 'nrb-redux',
    modules: [],
    components: [UsersComponent, UsersDetailsComponent, UsersFormComponent],

})

export default class App { }

App.service('UsersService', UsersService)

bootstrap(App.name)

// angular.element(document).ready(() => angular.bootstrap(document, ['nrb-redux']))