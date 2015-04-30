// linked to ng-app in pages. Dictates the states and controllers
angular.module('calorific', ['ionic','calorific.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// controls the states and how the app is navigates throughout
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  //state of the menu to the left of the landing page.
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",

  })
  // breakfast html
  .state('app.breakfast', {
    url: "/breakfast",
    views: {
      'menuContent': {
        templateUrl: "templates/breakfast.html",

      }
    }
  })
  //lunch html
  .state('app.lunch', {
    url: "/lunch",
    views: {
      'menuContent': {
        templateUrl: "templates/lunch.html",

      }
    }
  })
  //dinner html
  .state('app.dinner', {
    url: "/dinner",
    views: {
      'menuContent': {
        templateUrl: "templates/dinner.html",

      }
    }
  })
  //about the apphtml
  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html",

      }
    }
  })

  //add the apphtml
  .state('app.add', {
    url: "/add",
    views: {
      'menuContent': {
        templateUrl: "templates/add.html",

      }
    }
  })
  //main landing page where the app starts from
  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",

      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');


})
// This is to add the tabs to the bottom of the page as it was floating 
//to the top when the android app was built. 
.config(['$ionicConfigProvider', function($ionicConfigProvider)
{
$ionicConfigProvider.tabs.position('bottom');
}])
// Add local storage to the project
.factory('Foods', function() {
  return {
    all: function() {
      var foodString = window.localStorage['foods'];
      if (foodString) {
        return angular.fromJson(foodString);
      }
      return [];
    },
	// save the food to local storage
    save: function(foods) {
      window.localStorage['foods'] = angular.toJson(foods);
    },
    newFood: function(foodTitle) {
      // Add a new food function
      return {
        title: foodTitle,
        title: foodTitle,
        tasks: []
      };
    },
	// Retrieve last food info
    getLastActiveIndex: function() {
      return parseInt(window.localStorage['lastActiveFood']) || 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveFood'] = index;
    }
  }
})

.controller('TodoCtrl', function($scope, $timeout, $ionicModal, Foods) {

  // A utility function for creating a new food
  // with the given foodTitle
  var createFood = function(foodTitle) {
    var newFood = Foods.newFood(foodTitle);
    $scope.foods.push(newFood);
    Foods.save($scope.foods);
    $scope.selectFood(newFood, $scope.foods.length - 1);
  }


  // Load or initialize food
  $scope.foods = Foods.all();

  // Grab the last active, or the first food
  $scope.activeFood = $scope.foods[Foods.getLastActiveIndex()];

  // Called to create a new food
  $scope.newFood = function() {
    var foodTitle = prompt('Food Type');
    if (foodTitle) {
      createFood(foodTitle);
    }
  };

  // Called to select the given food
  $scope.selectFood = function(food, index) {
    $scope.activeFood = food;
    Foods.setLastActiveIndex(index);
    $scope.sideMenuController.close();
  };

  $scope.completionChanged = function() {
    Foods.save($scope.foods);
  };

  // Create our modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    focusFirstInput: false,
    scope: $scope
  });
// Add Calories
  $scope.createTask = function(task) {
    if (!$scope.activeFood) {
      return;
    }
    $scope.activeFood.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();

    // Inefficient, but save all the foods
    Foods.save($scope.foods);

    task.title = "";

  };

  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  }

  $scope.toggleFood = function() {
    $scope.sideMenuController.toggleLeft();
  };


  // Try to create the first food, make sure to defer
  // this by using $timeout so everything is initialized
  // properly
  $timeout(function() {
    if ($scope.foods.length == 0) {
      while (false) {
        var foodTitle = prompt('Your Food Type:');
        if (foodTitle) {
          createFood(foodTitle);
          break;
        }
      }
    }
  });

});
