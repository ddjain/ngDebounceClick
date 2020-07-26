
angular.module('ngDebounceClick', []).directive('ngDebounceClick', function ($timeout) {
	return {
		restrict: 'A',
		scope: {
			eventHandler: '&ngDebounceClick',
			ngDebounceOptions: "@ngDebounceOptions"
		},
		link: function (scope, el, attrs) {
			scope.ngDebounceOptions = scope.ngDebounceOptions ? (scope.ngDebounceOptions.time ? scope.ngDebounceOptions : {time:500}) : {time:500};
			var timeout;
			el.bind('click', function (e) {
				$timeout.cancel(timeout);
				timeout = $timeout(function () {
					scope.eventHandler.apply(this, arguments);
				}, scope.ngDebounceOptions.time)
				timeout.then(function(){},function(){},function(){})
			});
		}
	}
});
