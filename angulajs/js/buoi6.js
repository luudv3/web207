let myApp = angular.module('myApp', []);

// Định nghĩa controller
myApp.controller('demoController', function($scope){
    // Khai báo biến
    $scope.name = "Đặng vũ Lưu";

    // Khai báo mảng dữ liệu nhân viên
    // tên, ngày tháng năm sinh, lương, giới tính (0 là Nam, 1 là nữ)
    $scope.nhanVien = [
        {
            hoTen: "Đặng Vũ Lưu",
            ngaySinh : new Date("2002-12-12"),
            luong: 1500000,
            gioiTinh: 0
        },
        {
            hoTen: "Nguyễn Thị Thanh Tâm",
            ngaySinh : new Date("2002-11-13"),
            luong: 1500000,
            gioiTinh: 1  
        },
        {
            hoTen: "trần Quang Toản",
            ngaySinh : new Date("2002-05-25"),
            luong: 1500000,
            gioiTinh: 0  
        }
    ]
    $scope.sayHello = function ($name) {
        alert("Xin chào " + $name);
    }
})