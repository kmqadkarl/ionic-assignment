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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",

  })

  .state('app.breakfast', {
  url: "/breakfast",
  views: {
    'menuContent': {
      templateUrl: "templates/breakfast.html",

    }
  }
})

.state('app.lunch', {
url: "/lunch",
views: {
  'menuContent': {
    templateUrl: "templates/lunch.html",

  }
}
})

.state('app.dinner', {
url: "/dinner",
views: {
  'menuContent': {
    templateUrl: "templates/dinner.html",

  }
}
})

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


});
