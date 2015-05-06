var app = angular.module('userProfiles');

app.controller("MainController", function($scope, mainServices) {

	$scope.getUsers = function() {
    $scope.users = mainService.getUsers();
		
	}
	$scope.getUsers();

})