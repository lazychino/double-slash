'use strict';

angular.module('myApp', [
        'angulartics',
        'angulartics.google.analytics',
        'ui.router'
    ])
    .config(function($locationProvider, $analyticsProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');
        $analyticsProvider.withBase(true)

        $stateProvider.state({
                name: 'home',
                url: '/',
                template: '<h1>Welcome</h1>'
            })
            .state({
                name: 'state-a',
                url: '/a',
                template: '<h1>state A</h1>'
            })
            .state({
                name: 'state-b',
                url: '/b',
                template: '<h1>state B</h1>'
            });

        $urlRouterProvider.otherwise('/');
    });
