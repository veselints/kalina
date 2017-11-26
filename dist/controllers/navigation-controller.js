(function() {
    'use strict';

    function NavigationController($scope, $location, $route) {
        var vm = this;

        $scope.text = '';
        $scope.menuOpened = false;

        updateActiveView();

        $scope.$on('$routeChangeSuccess', updateActiveView);

        $scope.search = function() {
            $location.path('/search/' + $scope.text);
        }

        $scope.menuItemCick = function() {
            $scope.menuOpened = !$scope.menuOpened;
        };

        function updateActiveView() {
        	if (!$route.current || !$route.current.$$route) {
        		$scope.currentView = '';
        	} else if ($route.current.pathParams.category) {
        		$scope.currentView = $route.current.pathParams.category;
        	} else if ($route.current.$$route.originalPath === '/theartist') {
        		$scope.currentView = 'theartist';
        	} else {
        		$scope.currentView = '';
        	}
        }
    }

    angular.module('kalinaApp.controllers')
        .controller('NavigationController', ['$scope', '$location', '$route', NavigationController]);
}());