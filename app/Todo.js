const app = angular.module("TodoApp", [])

app.controller("TodoCtrl", function ($scope, $http) {
    $scope.title = "Welcome to your task list"
    $scope.searchText = ""
    $scope.newTaskName = ""

    $scope.todos = [
        { name: "Mow the lawn", complete: "incomplete" },
        { name: "Cut the grass", complete: "complete" },
        { name: "Kill the ants", complete: "incomplete" },
        { name: "Trim the weeds", complete: "complete" }
    ]

    $scope.addTask = function () {
        const anObject = {
            "name": $scope.newTaskName,
            "complete": "incomplete"
        }

        $scope.todos.push(anObject)

        $scope.newTaskName = ""
    }

    $scope.killTodo = function(todo) {
        const todoIndex = $scope.todos.indexOf(todo);

        if (todoIndex >= 0) {
          $scope.todos.splice(todoIndex, 1);
        }
    }

})
