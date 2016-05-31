angular.module("criticalApp").service("mainService", function($http) {

 this.getRoll = function(roll){
   return $http({
     method: "GET",
     url: "/api/roll?rollType=" + roll
   })
   .then(function(response){
     console.log(response.data);
     return response.data;
   });
 };

});
