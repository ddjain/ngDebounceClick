angular.module('ngDebounceClick', []).directive('ngDebounceClick', function () {
	return {
		restrict: 'A',
		scope: {
			eventHandler: '&ngDebounceClick',
			ngDebounceOptions: "=ngDebounceOptions"
		},
		link: function (scope, el, attrs) {
			waitTime = scope.ngDebounceOptions ? (scope.ngDebounceOptions.time ? scope.ngDebounceOptions.time : 500) : 500;
			var timeout;
			el.bind('click', function (e) {
				clearTimeout(timeout);
				timeout = setTimeout(function () {
					scope.eventHandler.apply(this, arguments);
				}, waitTime)
			});
		}
	}
});
