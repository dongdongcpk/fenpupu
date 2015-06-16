
app.controller('contactMeController', ['$scope', '$http',
    function($scope, $http) {
        $scope.contact = '联系我';
        $scope.quickMsg = 'Quick message';
        $scope.qMsg = {
            name: '昵称',
            email: 'Email',
            message: '有什么问题请尽管告诉我吧 ヾ(o◕∀◕)ﾉ',
            send: '发送'
        };
        $scope.rContact = {
            title: '联系方式',
            name: '联系人：东东枪',
            qq: 'QQ：138856015',
            email: '邮箱：wangyaodong0126@163.com',
            weibo: '微博：',
            weiboContent: 'weibo.com/dongdongcpk',
            p1: '你的鼓励是作者最大的动力，如果你很喜欢本网站，可以扫上方二维码，小额赞助我一下 _(:3 」∠)_，东东枪会努力做出更好的网站。',
            p2: '当然如果你对本网站有任何好的想法和意见，可以通过各种联系方式骚扰我，东东枪会尽量满足大家的要求。'
        };
        $scope.show = false;
        $scope.sendMsg = function() {
            if($scope.msg.name && $scope.msg.email && $scope.msg.message) {
                if($scope.msg.name.length <= 20 && $scope.msg.email.length <= 40 && $scope.msg.message.length <= 140) {
                    $http.post('sendQuickMsg', $scope.msg)
                        .success(function(res) {
                            console.log(res);
                        });
                    $scope.msg = {};
                    $scope.show = true;
                }
            }
        };
        $scope.limit = {
            name: '昵称长度小于等于20',
            email: 'Email长度小于等于40',
            message: '内容长度小于等于140',
            send: '已发送！'
        };
}]);