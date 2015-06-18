
app.controller('photosController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $scope.h1 = '扑扑的照片墙';
        $scope.small = '咳..咳 请自备纸巾(→_→)';

        var page = $routeParams.page;
        $http.get('getPhotos/' + page)
            .success(function(res) {
                $scope.photos1 = res.photos.slice(0, 4);
                $scope.photos2 = res.photos.slice(4, 8);
                var options = {
                    currentPage: page,
                    totalPages: res.maxPage,
                    numberOfPages: 6,
                    alignment: 'center',
                    pageUrl: function(type, page, current) {
                        return '#photos/' + page;
                    }
                };
                $('#photos').bootstrapPaginator(options);
            });
        $scope.modalTitle = '扑扑 ╮(￣▽￣)╭';
        $scope.close = '关闭';

        $scope.photoDetail = function(photo) {
            $scope.photo = photo;
        }

}]);