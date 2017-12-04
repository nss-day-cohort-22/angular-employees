angular
.module("EmployeeApp")
.controller("EmployeeListCtrl", function (EmployeeFactory, $scope) {
    $scope.employees = []

    /**
     * Use factory to get all employees from Firebase
     */
    EmployeeFactory.list().then(data => {
        $scope.employees = data
    })
})
