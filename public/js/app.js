angular.module('todoApp', [

]); //this is the setter syntax, you are creating an application using this one


angular.module('todoApp') //this is the getter syntax, we can use this so we don't have to make a variable to store our angular application; YAYYY no globals
      .controller('TodoController', TodoController);

TodoContoller.$inject = ['$scope', '$http'];

function TodoController($scope, $http){
  $scope.todos = [];
  init Todos();


  function initTodos(){
    $http.get('/api/todos')
      .then(function(response){
        $scope.todos = response.data;
      })
      .catch(function(err){
        console.err(err);
      });
  }
}
