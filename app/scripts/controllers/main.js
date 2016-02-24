'use strict';

/**
 * @ngdoc function
 * @name angularExercise2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularExercise2App
 */
angular.module('angularExercise2App')
    .controller('myctrl', function($scope) {
        $scope.btn = 'button';
        $scope.clsSuccess = 'btn-success';
        $scope.clsError = 'btn-danger';
        $scope.successBtn = function() {
            window.alert('U click on success button');
        };
        $scope.errorBtn = function() {
            window.alert('U click on error button');
        };
    });
