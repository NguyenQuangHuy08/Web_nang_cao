// window.sVienCtrl = function ($scope, $http) {

//     $scope.danhSach = [];
//     $scope.from_sinhVien = {

//         id: "",
//         name: "",
//         age: "",
//         gender: true,
//         address: "",

//     };

//     //list sinh viên
//     $http.get(sinhVienAPI).then(function (response) {

//         if (response.statusText === "OK") {

//             $scope.danhSach = response.data;

//         }
//     });


//     // DELETE : XÓA

//     $scope.removeStudent = function (event, index) {
//         event.preventDefault();
//         let sv = $scope.danhSach[index];
//         let api = sinhVienAPI + "/" + sv.id;
//         $http.delete(api).then(function () {
//             $scope.danhSach.splice(index, 1);
//             alert("Xóa sinh viên thành công !");
//         });
//     };


//     // DETAIL 
//     $scope.detailStudent = function (event, index) {
//         event.preventDefault();
//         let sv = $scope.danhSach[index];
//         $scope.from_sinhVien.id = sv.id;
//         $scope.from_sinhVien.name = sv.name;
//         $scope.from_sinhVien.age = sv.age;
//         $scope.from_sinhVien.gender = sv.gender;
//         $scope.from_sinhVien.address = sv.address;
//     };


//     //ADD 
//     $scope.addStudent = function (event) {
//         event.preventDefault();
//         $http.post(sinhVienAPI, $scope.from_sinhVien).then(function (response) {
//             if (response.status === 201) {
//                 $scope.danhSach.push($scope.from_sinhVien);
//                 alert("Thêm sinh viên thành công !");
//             }
//         });
//     };
//     // Hàm console để check :">
//     $scope.check = function () {
//         console.log($scope.from_sinhVien.gender);
//     };

//   





// };


//tạo hàm controller

window.sinhVienCtrl = function($scope, $http){
 
    $scope.danhSach = [];
    $scope.form_sinhVien = {

       id :"",
       name :"",
       age : "",
       gender : "",
       address : "",

    }


    //hiện list sinh viên 

    $http.get(sinhVienAPI).then(function(response) {

       if(response.statusText === "OK"){

           $scope.danhSach = response.data;


       }


    });


    
    //detaile 

    $scope.detailSinhVien = function (event, index){

        event.preventDefault();

        let sv = $scope.danhSach[index];
        $scope.formSinhVien.id = sv.id;
        $scope.formSinhVien.name = sv.name;
        $scope.formSinhVien.age = sv.age;
        $scope.formSinhVien.gender = sv.gender;
        $scope.formSinhVien.address = sv.address;

    }

        //xóa

        $scope.removeSinhVien = function(event, index){

            event.preventDefault();
            let sv = $scope.danhSach[index];
            let api = sinhVienAPI + "/" + sv.id;
            $http.delete(api).then(function () {
               
                    $scope.danhSach.splice(index, 1);
                    alert("Xóa thành công")
                
            });
    
    
        }


        //add

        
    $scope.addSinhVien = function (event) {

        event.preventDefault();
        $http.post(sinhVienAPI, $scope.formSinhVien).then(function (response) {

            if (response.statusText === 201) {

                $scope.danhSach.push($scope.formSinhVien);
                alert("Thêm thành công")

            }


        })

    }


    




};