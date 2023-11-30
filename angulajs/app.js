var app = angular.module("myApp", []);

app.controller("infoController", function ($scope) {
    $scope.info = [{
        name: "Đặng Vũ Lưu",
        age: 18,
        phone: "0395706333"
    },
    {
        name: "Thanh Tâm",
        age: 20,
        phone: "0395708888"
    }
    ]
})