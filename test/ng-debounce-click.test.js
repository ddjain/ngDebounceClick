'use strict';

describe('Angular Debounce Click directive test cases', function () {
	var $scope, directiveElem,myInterval, myTimeout,directiveDefaultElem;

	beforeEach(module('ngDebounceClick'));

	beforeEach(inject(function ($compile, _$rootScope_, _$timeout_) {
		$scope = _$rootScope_;
		myTimeout = _$timeout_;
		var element = angular.element('<input type="button" ng-debounce-click="myExpensiveFunction()" ng-debounce-options=\'{"time":700}\' value="Click Me">');
    var defaultElement = angular.element('<input type="button" ng-debounce-click="myExpensiveFunction()"  value="Click Me">');

    $scope.$digest();
		$scope.count = 0;
		$scope.myExpensiveFunction = function () {
			$scope.count = $scope.count + 1;
		}
		directiveElem = $compile(element)($scope);
    directiveDefaultElem = $compile(defaultElement)($scope);
     $scope.$digest();
	}));

	describe('Debounce click event test cases', function () {

		it('when expensive function called without delay contiously, then it should be called at once', function () {
			directiveElem.triggerHandler("click");
			directiveElem.triggerHandler("click");
			directiveElem.triggerHandler("click");
			directiveElem.triggerHandler("click");
			myTimeout.flush();
			expect($scope.count).toBe(1);
		});

		it('when expensive function called with some delay for four time, then it should be called at four time', function () {
			directiveElem.triggerHandler("click");
			myTimeout.flush();

			directiveElem.triggerHandler("click");
			myTimeout.flush();

			directiveElem.triggerHandler("click");
			myTimeout.flush();

			directiveElem.triggerHandler("click");
			myTimeout.flush();

			expect($scope.count).toBe(4);
		});

	});

  describe('Debounce click event option test cases', function () {
    it('when ngDebounceOptions time is provided it should override default time', function () {
      expect(JSON.parse(directiveElem.isolateScope().ngDebounceOptions).time).toBe(700)
    });

    it('when ngDebounceOptions time is not provided it should take default time', function () {
      expect(directiveDefaultElem.isolateScope().ngDebounceOptions.time).toBe(500)
    });
  });
});
