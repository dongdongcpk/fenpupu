
app.controller('photosController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        var page = $routeParams.page;
        var names;
        if(page == 1) {
            names = [
                'img/photos/photo_001.jpg',
                'img/photos/photo_002.jpg',
                'img/photos/photo_003.jpg',
                'img/photos/photo_004.jpg',
                'img/photos/photo_005.jpg',
                'img/photos/photo_006.jpg',
                'img/photos/photo_007.jpg',
                'img/photos/photo_008.jpg'
            ];
        }
        else if(page == 2) {
            names = [
                'img/photos/photo_009.jpg',
                'img/photos/photo_010.jpg',
                'img/photos/photo_011.jpg',
                'img/photos/photo_012.jpg',
                'img/photos/photo_013.jpg',
                'img/photos/photo_014.jpg',
                'img/photos/photo_015.jpg',
                'img/photos/photo_016.jpg'
            ];
        }
        $scope.names = names;
        $scope.active = 'active';

        var options = {
            currentPage: page,
            totalPages: 6,
            numberOfPages: 6,
            alignment: 'center',
            pageUrl: function(type, page, current) {
                return '#photos/' + page;
            }
        };
        $('#example').bootstrapPaginator(options);
}]);