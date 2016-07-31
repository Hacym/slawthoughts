(function() {
'use strict';

angular
    .module('slawThoughts')
    .directive('slawScroll', slawScroll);

slawScroll.$inject = ['$timeout', '$window'];

function slawScroll($timeout, $window) {
	return {
        restrict: 'A',
        link: function ($scope, $element) {
            $timeout(function () {
                $element.on('scroll', function() {
                    var contentPosition = ($window.innerHeight / 2) - 64;
                    var scrollPosition = $element[0].scrollTop;

                    if (scrollPosition >= contentPosition) {
                        $element.addClass('scrolled-past-hero');
                    } else {
                        $element.removeClass('scrolled-past-hero');
                    }

                    $scope.$apply();
                });
            }, 0);
        }
    };
}
})();