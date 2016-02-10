demoApp.controller('HomeController', function ($scope) {
    $scope.customers = [
        {
            name: 'John Doe',
            city: 'Atlanta'
        },
        {
            name: 'Jane Doe',
            city: 'New York'
        },
        {
            name: 'Kevin Clark',
            city: 'San Francisco'
        },
        {
            name: 'Dragos Cifrea',
            city: 'San Francisco'
        }
    ]

    $scope.addCustomer = function () {
        console.log('add customer clicked');
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })
    }
})
