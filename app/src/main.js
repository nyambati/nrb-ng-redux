import UsersComponent from './components/users/users.component';
import UsersDetailsComponent from './components/user-details/users.details.component';
import UsersFormComponent from './components/user-form/users.form.component';
import UsersService from './services/users.service';

const App = angular.module('nrb-redux', []);

App.component('usersList', UsersComponent);
App.component('usersDetails', UsersDetailsComponent);
App.component('usersForm', UsersFormComponent);
App.service('UsersService', UsersService)