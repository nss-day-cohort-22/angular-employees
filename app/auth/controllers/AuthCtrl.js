angular.module("EmployeeApp")
.controller("AuthCtrl", function($scope, $location, AuthFactory) {
    $scope.auth = {}

    $scope.logoutUser = function () {
        AuthFactory.logout()
        $location.url('/auth')
    }

    $scope.logMeIn = function () {
        AuthFactory.authenticate($scope.auth).then(function (didLogin) {
            $scope.login = {}
            $location.path("/employees/list")
        })
    }

    $scope.registerUser = function(registerNewUser) {
      AuthFactory.registerWithEmail(registerNewUser).then(function (didRegister) {
        logMeIn(registerNewUser)
      })
    }

})