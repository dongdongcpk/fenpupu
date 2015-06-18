
app.controller('indexController', ['$scope', function($scope) {
    $scope.h1 = '欢迎来到扑扑的小窝';
    $scope.h2 = 'A、B站UP主粉扑扑，宅舞持续努力中';
    $scope.p1 = "Welcome to pupu's home.";
    $scope.p2 = "One of acfun and bilibili 's up host, I'm trying to practice dancing.";
    $scope.moreVideo = '更多作品，请戳这里：';
    $scope.acfun = 'A站链接：';
    $scope.acfunUrl = '偷偷看我头像就是基佬╭(╯^╰)╮';
    $scope.bilibili = 'B站链接：';
    $scope.bilibiliUrl = '(●´艸`)ヾ别以为我喜欢你';

    $scope.dance = '宅舞系列';
    $scope.dance1 = {
        path: 'img/covers/10017.png',
        title: '【粉扑扑】水色Summer Days ´ω` 感受来自越南的海风',
        desc: '自制 夏天眼看着就要来啦！在这个季节里希望能给大家带来一丝清风~这首歌是年前和猫&amp;露一起去越南玩的时候录的~虽然当时是冬天但是那里的天气真的是极好的~天也很蓝很美~风也吹着很舒服~希望这一作也可以给大家带来快乐！（偷偷和我姚子一起投稿算不算秀恩爱呢=w=）振付: めろちん「sm21590350」 原曲: 味噌汁P「sm18880240」 最后谢谢给我放歌的猫~摄影ZZ~还有站在远处看我的露宝宝~手比爱心',
        url: '#videoDetail/aid=2397392&page=1'
    };
    $scope.dance2 = {
        path: 'img/covers/10016.png',
        title: '【粉扑扑】HIDE AND SEEK ´ω` 四月是谁的谎言？【迟到的生日作】',
        desc: '自制 特别喜欢这首歌！录了不下三十次才终于有了P1！第一次看这首舞的时候就配着歌词看哭了... 也许是因为以前身为一个胖女孩的我从来没有喜欢过自己吧.. 真的是遇见了太多太多的好人，包括经常鼓励我的你们，我才开始也慢慢喜欢上了自己~虽然这首舞看着很简单，但是跳了那么多次也是因为实在想要给大家最好的一遍！希望大家可以感受到我对你们感谢的心意~ P2是吹了大风觉得受了影响~但天气真的太好啦也可以感受一下！',
        url: '#videoDetail/aid=2274317&page=1'
    };
    $scope.dance3 = {
        path: 'img/covers/10015.png',
        title: '【粉扑扑´ω`小缘喵 】 可爱颂2015 · 日常卖萌勿要嫌弃',
        desc: '自制 因为猎魔通缉令而认识了这首超~可爱的~可爱颂2015~小缘唱的真是萌萌哒！听了心情都变好了~至于我日常卖萌泥们不要嫌弃好不好！！！众人：“好好好扑扑说什么都好！”',
        url: '#videoDetail/aid=2202407&page=1'
    };
    $scope.start = '播放';
    $scope.more = '更多';
    $scope.morevideoUrl = '#videos/1';
    $scope.morePhotoUrl = '#photos/1';
    $scope.photo1 = 'img/photos/fenpupu (144).jpg';
    $scope.photo2 = 'img/photos/fenpupu (106).jpg';
    $scope.photo3 = 'img/photos/fenpupu (97).jpg';
}]);