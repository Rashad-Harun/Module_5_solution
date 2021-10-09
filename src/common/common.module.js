(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://rash-arun.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();


// Links: 
// https://rash-arun.herokuapp.com/menu_items.json
// https://rash-arun.herokuapp.com/categories.json