
app.controller('boardController', ['$scope', '$http',
    function($scope, $http) {
        var CM = new CommentManager($('#my-comment-stage').get(0));
        CM.init();
        CM.start();

        $scope.h1 = '留言板';
        $scope.h2 = '发表留言';
        $scope.board = {
            name: '昵称',
            message: '把你想说的都写下来吧(=￣ω￣=)',
            send: '留言'
        };
        $scope.limit = {
            name: '昵称长度小于等于20',
            message: '内容长度小于等于140',
            send: '已发送！'
        };
        $scope.show = false;
        $scope.sendMsg = function() {
            if($scope.msg.name && $scope.msg.message) {
                if($scope.msg.name.length <= 20 && $scope.msg.message.length <= 140) {
                    $http.post('sendBoardMsg', $scope.msg)
                        .success(function(res) {
                            console.log(res);
                            CM.send(res);
                        });

                    $scope.msg = {};
                    $scope.show = true;
                }
            }
        };

        var danmakuList = [
            {
                "mode":1,
                "text":"Hello World",
                "stime":1000,
                "size":25,
                "color":0xffffff
            },
            {
                "mode":1,
                "text":"Hello CommentCoreLibrary",
                "stime":3000,
                "size":30,
                "color":0xff0000
            }
        ];
        CM.load(danmakuList);
        var startTime = 0;
        var a = setInterval(function() {
            startTime += 500;
            CM.time(startTime);
            if(startTime > 5000) {
                startTime = 0;
            }
        }, 500);
    }]);