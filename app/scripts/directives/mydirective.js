'use strict';
angular.module('angularExercise2App')

.directive('myDirective', function() {
    return {
        template: '<button >{{btn}}</button>',
        replace: true,
        scope: {
            btn: '=buttoname',
            clsSuccess: '@',
            clsError: '@',
            successBtn: '&',
            errorBtn: '&'
        },
    };
});