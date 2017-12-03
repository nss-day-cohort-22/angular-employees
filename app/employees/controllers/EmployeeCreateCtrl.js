angular
.module("EmployeeApp")
.controller("EmployeeCreateCtrl", function ($scope, EmployeeFactory) {
    $scope.newEmployee = {}

    /**
     * Use this event listener to check if there is any data
     * in the factory cache each time the user loads a view
     * that is bound to this controller
     */
    $scope.$on('$viewContentLoaded', function(event) {
        if (!EmployeeFactory.cache) {
            console.info("No cached data")
            EmployeeFactory.list(true).then(data => {
                $scope.employees = data
            })
        } else {
            console.info("Using cached data")
            $scope.employees = EmployeeFactory.cache
        }
    })

    $scope.addEmployee = function () {
        const employee = {
            "firstName": $scope.newEmployee.firstName,
            "lastName": $scope.newEmployee.lastName,
            "employmentStart": Date.now(),
            "employmentEnd": 0
        }

        /**
         * Use the factory to POST to Firebase
         */
        EmployeeFactory.add(employee).then(() => {
            $scope.newEmployee.firstName = ""
            $scope.newEmployee.lastName = ""
        })

        /**
         * If POST was successful, retrieve new list of employees
         */
        .then(() => {
            return EmployeeFactory.list()
        })

        /**
         * Bind new list of employees to scope so view gets updated
         */
        .then(employees => {
            $scope.employees = employees
        })
    }
})
