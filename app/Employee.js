
app.controller("EmployeeCtrl", function ($scope, $http) {
    $scope.newEmployee = {}
    $scope.employees = []

    $scope.addEmployee = function () {
        $http
            .post(
                "https://angular-employees-6727b.firebaseio.com/employees/.json",
                {
                    "firstName": $scope.newEmployee.firstName,
                    "lastName": $scope.newEmployee.lastName,
                    "employmentStart": Date.now(),
                    "employmentEnd": 0
                }
            )
            .then(() => {
                $scope.newEmployee.firstName = ""
                $scope.newEmployee.lastName = ""
                getEmployees()
            })
    }

    const getEmployees = () => {
        $http
        .get("https://angular-employees-6727b.firebaseio.com/employees/.json")
        .then(response => {
                $scope.employees = response.data
        })
    }

    $scope.fireEmployee = function (employee, key) {
        employee.employmentEnd = Date.now()

        $http
            .put(
                `https://angular-employees-6727b.firebaseio.com/employees/${key}/.json`,
                employee
            )
            .then(getEmployees)

    }

    $scope.killEmployee = function (key) {
        $http
            .delete(`https://angular-employees-6727b.firebaseio.com/employees/${key}/.json`)
            .then(getEmployees)
    }

    getEmployees()
})
