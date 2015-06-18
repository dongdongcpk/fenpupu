
app.controller('videosController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $scope.h1 = '扑扑的舞蹈';
        $scope.small = '安静看视频，基佬！ <(￣︶￣)>';

        var page = $routeParams.page;
        $http.get('getVideos/' + page)
            .success(function(res) {
                $scope.videos1 = res.slice(0, 3);
                $scope.videos2 = res.slice(3, 6);
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