
app.controller('videosController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        var page = $routeParams.page;
        $http.get('getVideos/' + page)
            .success(function(res) {
                $scope.videos = res;
//                $scope.videos1 = res.slice(0, 3);
//                $scope.videos2 = res.slice(3, 6);
            });

        var options = {
            currentPage: page,
            totalPages: 6,
            numberOfPages: 6,
            alignment: 'center',
            pageUrl: function(type, page, current) {
                return '#videos/' + page;
            }
        };
        $('#videos').bootstrapPaginator(options);
}]);