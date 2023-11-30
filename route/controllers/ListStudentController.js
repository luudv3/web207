window.ListStudentController = function($scope, $http){
    $scope.title = "Danh sách sinh viên";

    // Thực hiện call API
    // Link API

    const apiStudents= "http://localhost:9999/students";
    function getData(){
        $http.get(apiStudents).then(function(response){
            console.log(response);

        // truy cập dữ liệu
            console.log(response.data);

            if(response.status == 200){
                $scope.listStudents = response.data;
            }
        })
    }
    getData();
}