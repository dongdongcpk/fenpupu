
app.controller('logsController', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $scope.h1 = '开发日志';
        var page = $routeParams.page;
        $http.get('getLogs/' + page)
            .success(function(res) {
                $scope.logs = res;
            });

        var options = {
            currentPage: page,
            totalPages: 6,
            numberOfPages: 6,
            alignment: 'center',
            pageUrl: function(type, page, current) {
                return '#logs/' + page;
            }
        };
        $('#logs').bootstrapPaginator(options);
}]);