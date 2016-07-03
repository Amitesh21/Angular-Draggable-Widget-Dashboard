(function() {

  var widgets = [
    {
      title:'Allergies',
      dialodId : 'did1',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg'
    },
    {
      title:'Patient Visits',
      dialodId : 'did2',
      img : 'https://media2.popsugar-assets.com/files/2014/02/10/666/n/24155406/a2acad2b64836967_Postpartum.jpg.xxxlarge_2x.jpg'
    },
    {
      title:'Doctor Notes',
      dialodId : 'did3',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg'
    },
    {
      title:'Word Cloud',
      dialodId : 'did4',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg'
    },
    {
      title:'Twitter Feeds',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg'
    }
    ,
    {
      title:'Vital Signs',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg'
    }
  ];

 var app = angular.module('app', ['ngRoute','ng-draggable-widgets','ngDialog']);
    
    app.controller('dragController', function($scope , $rootScope, ngDialog) {
      $scope.widgets = widgets;
      $scope.moveWidget = function(drag) {
        console.log(drag);
      }

      $scope.open = function () {
              ngDialog.open({ template: 'firstDialogId', controller: 'InsideCtrl' });
            };

            $scope.openDefault = function () {
              $rootScope.theme = 'ngdialog-theme-default';

              ngDialog.open({
                template: 'firstDialogId',
                controller: 'InsideCtrl',
                className: 'ngdialog-theme-default'
              });
            };

      $scope.openSecond = function () {
              ngDialog.open({
                template: '<a href="#" ng-click="closeSecond()">Close here</a>',
                plain: true,
                closeByEscape: false,
                //controller: 'SecondModalCtrl'
              });
            };

      $scope.closeSecond = function () {
              ngDialog.close();
            };

      $scope.allergies = function(){
        window.location.assign('getAllergies');
      }

      });
  })();

         
