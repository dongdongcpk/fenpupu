
app.controller('faqController', ['$scope', '$http',
    function($scope, $http) {
//        $scope.content = '有什么问题请尽管提问吧 ヾ(o◕∀◕)ﾉ';
        $http.get('faqContent')
            .success(function(res) {
                $scope.content = res;
            });
}]);