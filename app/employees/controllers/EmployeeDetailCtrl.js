angular
.module("EmployeeApp")
.controller("EmployeeDetailCtrl",
    function ($scope, $location, $routeParams, $http, EmployeeFactory) {
        $scope.employee = {}

        EmployeeFactory.single($routeParams.employeeId).then(employee => {
            $scope.employee = employee
        })

        /*
        This function is bound to an ng-click directive
        on the button in the view
        */
        $scope.deleteSong = () => $http
            .delete(`${firebaseURL}/songs/${$routeParams.songId}.json`)
            .then(() => $location.url("/"));
    }
)
