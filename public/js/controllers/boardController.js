
app.controller('boardController', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
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

        var page = $routeParams.page;
        var boards;
        $http.get('getBoards/' + page)
            .success(function(res) {
                boards = res.boards;
                boards.sort(function(board1, board2) {
                    date1 = board1.date;
                    date2 = board2.date;
                    if(date1 > date2) {
                        return 1;
                    }
                    else{
                        return -1;
                    }
                });
                for(var i = 0, len = boards.length; i < len; i++) {
                    var board = boards[i];
                    board.color = parseInt(board.color, 16);
                    board.stime = 600 * (i + 1);
                }
                CM.load(boards);
                $scope.boards = boards;

                var options = {
                    currentPage: page,
                    totalPages: res.maxPage,
                    numberOfPages: 6,
                    alignment: 'center',
                    pageUrl: function(type, page, current) {
                        return '#boards/' + page;
                    }
                };
                $('#boards').bootstrapPaginator(options);
            });

        var stimes = [600, 600*2, 600*3, 600*4, 600*5, 600*6];
        $scope.show = false;
        $scope.sendMsg = function() {
            if($scope.msg.name && $scope.msg.message) {
                if($scope.msg.name.length <= 20 && $scope.msg.message.length <= 140) {
                    $http.post('sendBoardMsg', $scope.msg)
                        .success(function(res) {
                            res.color = parseInt(res.color, 16);
                            var r = Math.floor(Math.random() * (stimes.length + 1));
                            res.stime = stimes[r];
                            boards.push(res);
                            boards.shift();
                        });

                    $scope.msg = {};
                    $scope.show = true;
                }
            }
        };

        var startTime = 0;
        setInterval(function() {
            startTime += 500;
            CM.time(startTime);
            if(startTime > 5000) {
                startTime = 0;
            }
        }, 500);
    }]);