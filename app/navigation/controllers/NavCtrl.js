angular.module("EmployeeApp").controller("NavCtrl",
    function ($scope, $location, AuthFactory, EmployeeFactory, $rootScope) {
        /*
        Just a pass-through method to the AuthFactory method of the
        same name.
        */
        $scope.isAuthenticated = () => AuthFactory.isAuthenticated();

        $rootScope.$on("authenticationSuccess", function () {
            $scope.email = AuthFactory.getUser().email
       })

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
