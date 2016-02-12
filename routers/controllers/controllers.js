demoApp.controller('HomeController', function ($scope) {
    $scope.customers = [];

    $scope.addCustomer = function () {
        console.log('add customer clicked');
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })
    }
})
