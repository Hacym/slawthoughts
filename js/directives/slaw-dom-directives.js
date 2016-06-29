(function() {
'use strict';

angular
    .module('slawThoughts')
    .directive('slawScroll', slawScroll);

slawScroll.$inject = ['$timeout'];

function slawScroll($timeout) {
	return {
        restrict: 'A',
        link: function ($scope, $element) {
            $timeout(function () {
                $element.on('scroll', function() {
                    var scrollPosition = $element[0].scrollTop;

                    if (scrollPosition >= 175) {
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