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


});
