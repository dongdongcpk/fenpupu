
app.controller('photosController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        var page = $routeParams.page;
        $http.get('getPhotos/' + page)
            .success(function(res) {
                $scope.photos1 = res.slice(0, 4);
                $scope.photos2 = res.slice(4, 8);
            });
        $scope.modalTitle = '扑扑 ╮(￣▽￣)╭';
        $scope.close = '关闭';

        var options = {
            currentPage: page,
            totalPages: 6,
            numberOfPages: 6,
            alignment: 'center',
            pageUrl: function(type, page, current) {
                return '#photos/' + page;
            }
        };
        $('#photos').bootstrapPaginator(options);
}]);