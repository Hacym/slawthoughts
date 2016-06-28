(function() {
'use strict';

angular
    .module('slawThoughts')
    .directive('slawHeader', slawHeader)
    .directive('slawReviews', slawReviews)
    .directive('slawInfo', slawInfo);

function slawHeader() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/slaw-header.html'
    };
}

function slawReviews() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/slaw-reviews.html'
    };
}

function slawInfo() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/slaw-info.html'
    };
}

})();
