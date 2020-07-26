# ngDebounceClick
ng-debounce-click is the directive which is help to improve browser performance by reducing expensive/time consuming function invokation.

## About
ng-debounce-click is a directive used to make sure that expensive/time consiming function do not fire so often that may cause low web perfomance. we can limit the rate of invokation of function.

## Requirements
* Angular js.

Include `ng-debounce-click.js` after `angular.js` library.

example:

JS
```
	// include the `ngDebounceClick` module
	var app = angular.module('myApp', ['ngDebounceClick']);
	app.controller('myCtrl', function($scope) {
		$scope.myOnClickExpensiveFunction = function() {
		  //TODO : Some Expensive implementation.
		};

	});  
 
```

HTML 

```
  <div ng-app='myApp' ng-controller='myCtrl'> 
       <input type="button" ng-debounce-click="myOnClickExpensiveFunction()" ng-debounce-options="{time:1000}" value="Click Me">
  </div>
```  
### ng-debounce-options
- time: (miliseconds) function get called if no event is fire for given time.
         Default time is 500ms
  
## Contributing
 
Contributors are welcome. I am interested in suggestions for new features or improvements. Please get in touch.

Email: nnd.darshan@gmail.com
