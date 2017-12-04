angular
.module("EmployeeApp")
.controller("EmployeeDetailCtrl",
    function ($scope, $location, $routeParams, EmployeeFactory) {
        $scope.employee = {}

        /**
         * Use the factory to get the details of a single employee
         */
        EmployeeFactory.single($routeParams.employeeId).then(employee => {
            $scope.employee = employee
        })

        /*
        This function is bound to an ng-click directive
        on the button in the view
        */
        $scope.fireEmployee = () =>
            EmployeeFactory.fire($scope.employee, $routeParams.employeeId).then(() =>
                $location.url("/"));

        /*
        This function is bound to an ng-click directive
        on the button in the view
        */
        $scope.murderEmployee = () =>
            EmployeeFactory.murder($routeParams.employeeId).then(() =>
                $location.url("/"));
    }
)
