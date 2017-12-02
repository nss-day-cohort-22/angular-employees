angular
.module("EmployeeApp")
.controller("EmployeeListCtrl", function ($scope, EmployeeFactory) {
    $scope.employees = []

    EmployeeFactory.list(true).then(data => {
        $scope.employees = data
    })
})
