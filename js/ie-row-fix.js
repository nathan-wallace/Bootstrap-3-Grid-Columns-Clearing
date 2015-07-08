/* fix so that rows that have a ton of columns clear the first item in each row. */
	$scope.w = angular.element($window);
	$scope.windowWidth;
	$scope.w.bind('resize', function () {
		$scope.windowWidth = $window.innerWidth;
		$scope.rowPolyfill();
	});
	
	$scope.rowPolyfill = function() {
		$('.multi-columns-row > [class^="col-"]').removeClass('first-in-row');
		if ($scope.windowWidth > 1200) {
			$('.multi-columns-row > .col-lg-6:nth-child(2n + 3)').addClass('first-in-row');
			$('.multi-columns-row > .col-lg-4:nth-child(3n + 4)').addClass('first-in-row');
			$('.multi-columns-row > .col-lg-3:nth-child(4n + 5)').addClass('first-in-row');
			$('.multi-columns-row > .col-lg-2:nth-child(6n + 7)').addClass('first-in-row');
			$('.multi-columns-row > .col-lg-1:nth-child(12n + 13)').addClass('first-in-row');
		} else if ($scope.windowWidth >= 992) {
			$('.multi-columns-row > .col-md-6:nth-child(2n + 3)').addClass('first-in-row');
			$('.multi-columns-row > .col-md-4:nth-child(3n + 4)').addClass('first-in-row');
			$('.multi-columns-row > .col-md-3:nth-child(4n + 5)').addClass('first-in-row');
			$('.multi-columns-row > .col-md-2:nth-child(6n + 7)').addClass('first-in-row');
			$('.multi-columns-row > .col-md-1:nth-child(12n + 13)').addClass('first-in-row');
		} else if ($scope.windowWidth >= 768) {
			$('.multi-columns-row > .col-sm-6:nth-child(2n + 3)').addClass('first-in-row');
			$('.multi-columns-row > .col-sm-4:nth-child(3n + 4)').addClass('first-in-row');
			$('.multi-columns-row > .col-sm-3:nth-child(4n + 5)').addClass('first-in-row');
			$('.multi-columns-row > .col-sm-2:nth-child(6n + 7)').addClass('first-in-row');
			$('.multi-columns-row > .col-sm-1:nth-child(12n + 13)').addClass('first-in-row');
		} else {
			$('.multi-columns-row > .col-xs-6:nth-child(2n + 3)').addClass('first-in-row');
			$('.multi-columns-row > .col-xs-4:nth-child(3n + 4)').addClass('first-in-row');
			$('.multi-columns-row > .col-xs-3:nth-child(4n + 5)').addClass('first-in-row');
			$('.multi-columns-row > .col-xs-2:nth-child(6n + 7)').addClass('first-in-row');
			$('.multi-columns-row > .col-xs-1:nth-child(12n + 13)').addClass('first-in-row');
		}
	}	
