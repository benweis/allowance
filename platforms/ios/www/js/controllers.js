angular.module('ionicApp', ['ionic'])

app.controller('MyCtrl', function($scope, $ionicActionSheet) {
  
  $scope.data = {
    showDelete: false
  };

  $scope.showDetails = function() {
    $ionicActionSheet.show({
     buttons: [
       { text: 'Complete' }
     ],
     destructiveText: 'Delete',
     titleText: 'Update Todo',
     cancelText: 'Cancel',
     buttonClicked: function(index) {
       return true;
     }
   });
  
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];
  
});