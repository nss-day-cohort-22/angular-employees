angular.module("EmployeeApp").constant("FIREBASE_CONFIG", {
    apiKey: "AIzaSyAVEYAQjup-h8ntnEN4h_sHRkTRc9An46o",
    authDomain: "angular-employees-6727b.firebaseapp.com",
    databaseURL: "https://angular-employees-6727b.firebaseio.com",
    projectId: "angular-employees-6727b",
    storageBucket: "angular-employees-6727b.appspot.com",
    messagingSenderId: "413986069191"
})

angular.module("EmployeeApp").run(function (FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG)
})

const isAuth = AuthFactory => new Promise ((resolve, reject) => {
    if (AuthFactory.isAuthenticated()){
        console.log("User is authenticated, resolve route promise")
        resolve()
    } else {
        console.log("User is not authenticated, reject route promise")
        reject()
    }
})


angular.module("EmployeeApp").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider
        .when("/", {
            templateUrl: "app/employees/partials/list.html",
            controller: "EmployeeListCtrl",
            resolve: { isAuth }
        })
        .when("/employees/list", {
            templateUrl: "app/employees/partials/list.html",
            controller: "EmployeeListCtrl",
            resolve: { isAuth }
        })
        .when('/employees/new', {
            templateUrl: 'app/employees/partials/create.html',
            controller: 'EmployeeCreateCtrl',
            resolve: { isAuth }
        })
        .when('/employees/detail/:employeeId', {
            templateUrl: 'app/employees/partials/detail.html',
            controller: 'EmployeeDetailCtrl',
            resolve: { isAuth }
        })
        .when('/auth', {
            templateUrl: 'app/auth/partials/register.html',
            controller: 'AuthCtrl'
        })
        .otherwise('/auth')
})
