;(function() {
"use strict";

"use strict";

angular.element(document).ready(function () {
    angular.bootstrap(document, ["app"]);
});
}());

;(function() {
"use strict";

'use strict';

angular.module('app', ['rx', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'mdRangeSlider', 'app.layout', 'app.rxFilter']).run(function () {

    console.log('run');
});
}());

;(function() {
"use strict";

"use strict";

angular.module('app.layout', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        abstract: true,
        views: {
            root: {
                templateUrl: 'app/layout/views/layout.html'

            },
            "header@app": {
                templateUrl: 'app/layout/views/header.html'

            },
            "footer@app": {
                templateUrl: 'app/layout/views/footer.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/rx-filter');
});
}());

;(function() {
"use strict";

'use strict';

/**
 * Created by griga on 5/10/16.
 */

angular.module('app.rxFilter', []).config(function ($stateProvider) {
    $stateProvider.state('app.rxFilter', {
        url: '/rx-filter',
        views: {
            "content@app": {
                controller: 'RxFilterController as vm',
                templateUrl: 'app/rx-filter/rx-filter.html'
            }
        },
        data: {
            title: 'Board'
        }
    });
});
}());

;(function() {
"use strict";

"use strict";

angular.module("ng").run(["$templateCache", function ($templateCache) {
  $templateCache.put("app/rx-filter/rx-filter.html", "<md-content>\n    <p>duration, h: {{filter.duration.min}}-{{filter.duration.max}}</p>\n    <range-slider lower-value=\"filter.duration.min\" upper-value=\"filter.duration.max\" min-gap=\"1\" step=\"1\" min=\"1\"\n                  max=\"48\"></range-slider>\n    <p>price, $: {{filter.price.min}}-{{filter.price.max}}</p>\n    <range-slider lower-value=\"filter.price.min\" upper-value=\"filter.price.max\" min-gap=\"100\" step=\"100\" min=\"0\"\n                  max=\"10000\"></range-slider>\n\n    <md-input-container>\n        <label>Order By</label>\n        <md-select ng-model=\"filter.order\">\n            <md-option ng-repeat=\"item in vm.orders\" value=\"{{item.field}}\">\n                {{item.title}}\n            </md-option>\n        </md-select>\n    </md-input-container>\n\n\n    <md-list>\n        <md-subheader class=\"md-no-sticky\">Search results:</md-subheader>\n        <md-list-item class=\"md-3-line\" ng-repeat=\"item in vm.items\">\n\n            <div class=\"md-list-item-text\" layout=\"column\">\n                <h3>{{item.id}} ___ {{ item.title }} ___ {{ item.price | currency }} ___ {{item.duration}}</h3>\n\n            </div>\n        </md-list-item>\n        <md-divider></md-divider>\n    </md-list>\n</md-content>");
  $templateCache.put("app/layout/views/footer.html", "<div class=\"footer-copyright\">\n&copy; M22\n</div>");
  $templateCache.put("app/layout/views/header.html", "<nav class=\"layout-row\">\n    <span class=\"flex\"></span>\n    <b>Rx Filter</b>\n</nav>");
  $templateCache.put("app/layout/views/layout.html", "<header data-ui-view=\"header\"></header>\n\n<section class=\"layout-row flex\" ng-cloak>\n\n    <div data-ui-view=\"content\" id=\"content\" class=\"layout-column flex\" data-autoscroll=\"false\"></div>\n\n</section>\n\n<footer data-ui-view=\"footer\"></footer>\n\n\n\n");
}]);
}());

;(function() {
"use strict";

'use strict';

/**
 * Created by griga on 5/28/16.
 */

var items = [{
    id: 1,
    duration: 3600 * 10,
    title: 'Flight 1',
    price: 800
}, {
    id: 2,
    duration: 3600 * 5,
    title: 'Flight 2',
    price: 600
}, {
    id: 3,
    duration: 3600 * 6,
    title: 'Flight 3',
    price: 500
}, {
    id: 4,
    duration: 3600 * 11,
    title: 'Flight 4',
    price: 1100
}, {
    id: 5,
    duration: 3600 * 12,
    title: 'Flight 5',
    price: 1000
}, {
    id: 6,
    duration: 3600 * 22,
    title: 'Flight 6',
    price: 2700
}, {
    id: 7,
    duration: 3600 * 23,
    title: 'Flight 7',
    price: 2800
}];

var Data = function Data() {

    var subject = new Rx.Subject();

    return {
        fetch: function fetch(filter) {

            var i = _.chain(items).filter(function (_i) {
                return filter.price.min <= _i.price && _i.price <= filter.price.max;
            }).orderBy([filter.order]).value();
            console.log(i);
            subject.onNext(i);
        },
        subscribe: function subscribe(cb) {
            subject.subscribe(cb);
        },
        getAll: function getAll() {
            return items;
        }
    };
};

angular.module('app.rxFilter').factory('Data', Data);
}());

;(function() {
"use strict";

'use strict';

/**
 * Created by griga on 1/25/16.
 */

var RxFilterController = function RxFilterController($scope, Data) {
    var _this = this;

    var itemsSub = Data.subscribe(function (items) {
        $scope.$apply(function () {
            _this.items = items;
        });
    });

    $scope.filter = {
        duration: {
            min: 12,
            max: 24
        },
        price: {
            min: 100,
            max: 1200
        },
        order: 'price'
    };

    this.orders = [{ field: 'id', title: 'ID' }, { field: 'price', title: '$' }, { field: 'duration', title: 'Duration' }, { field: 'title', title: 'Title' }];
    var inputObservable = Rx.Observable.merge($scope.$toObservable('filter.duration.min'), $scope.$toObservable('filter.duration.max'), $scope.$toObservable('filter.price.min'), $scope.$toObservable('filter.price.max'), $scope.$toObservable('filter.order')).debounce(250);

    var inputSub = inputObservable.subscribe(function () {
        Data.fetch($scope.filter);
    }, function (e) {
        return console.log('inputObservable onError: %s', e);
    }, function () {
        return console.log('inputObservable onCompleted');
    });

    $scope.$on('$destrow', function () {
        inputSub.dispose();
        itemsSub.dispose();
    });
};

angular.module('app.rxFilter').controller('RxFilterController', RxFilterController);
}());
