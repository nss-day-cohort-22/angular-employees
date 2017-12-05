angular.module("EmployeeApp").controller("NavCtrl",
    function ($scope, $location, AuthFactory, EmployeeFactory) {
        /*
        Just a pass-through method to the AuthFactory method of the
        same name.
        */
        $scope.isAuthenticated = () => AuthFactory.isAuthenticated();

        $scope.finder = event => {
            if (event.key === "Enter") {
                const employee = EmployeeFactory.find($scope.searchString)
                $location.url(`/employees/detail/${employee.id}`)
            }
        }

        /*
        Unauthenticate the client.
        */
        $scope.logout = () => AuthFactory.logout();

    }
)
