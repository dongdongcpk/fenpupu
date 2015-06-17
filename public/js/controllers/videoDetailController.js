
app.controller('videoDetailController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        var id = $routeParams.id;
        $http.get('getVideo/' + id)
            .success(function(res) {
                console.log(res);
                $scope.videoId = res;
            });
}]);