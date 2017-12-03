angular
.module("EmployeeApp")
.controller("EmployeeListCtrl", function ($scope, EmployeeFactory) {
    $scope.employees = []

    /**
     * Use factory to get all employees from Firebase
     */
    EmployeeFactory.list(true).then(data => {
        $scope.employees = data
    })
})
