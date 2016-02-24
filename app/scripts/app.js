'use strict';

/**
 * @ngdoc overview
 * @name angularExercise2App
 * @description
 * # angularExercise2App
 *
 * Main module of the application.
 */
angular
    .module('angularExercise2App', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'myctrl',
                controllerAs: 'main'
            })

        .otherwise({
            redirectTo: '/'
        });
    });
