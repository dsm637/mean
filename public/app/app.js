console.log('mvMainCtrl initialization');

angular.module('wp-app', ['ngResource', 'ngRoute']);
console.log('wp-app module created');

console.log('wp-app configuration');
angular.module('wp-app').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    //$routeProvider.when('/', { templateUrl: 'main/main', controller: 'mvMainCtrl' });
    $routeProvider.when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl' });
    $routeProvider.when('/dummy', { templateUrl: '/partials/main/dummy', controller: 'mvMainCtrl' });
    $routeProvider.when('/main', { templateUrl: '/partials/main/main2', controller: 'mvMainCtrl' });
    console.log('wp-app configured');
});
