
app.controller('videoDetailController', ['$scope', '$routeParams', '$http', '$sce',
    function($scope, $routeParams, $http, $sce) {
        var id = $routeParams.id;
        $http.get('getVideo/' + id)
            .success(function(res) {
                $scope.embed = $sce.trustAsHtml('<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="'+ res +'" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>');
            });
}]);