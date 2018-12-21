/**
 * Created by wangzheng on 2016/4/8.
 */

    //1、绳子的坐标与牛头的坐标关系确定绳子是否套到了牛，因此绳子与牛应在同一个坐标系，所以二者的父元素应该相同
    //  2、牛的坐标不能用fixed定位，因为是相对于浏览器窗口的定位，就没法滚动了！！！
    //  3、绳子不能放在.cow1_wrap内，应为虽然和牛共用了一个坐标系，但是绳子会跟着牛一起滚动！！！
    //如何判断牛运动到了屏幕的某一位置
    //    4、定时器的开启和销毁


    //全局变量
var  score=0,timer,totalTime=30000,ropeTime=300,time=30,
     SCREENWIDTH

SCREENWIDTH=(window.screen.width>=430)?430:window.screen.width;

//加载动画
var loader = new resLoader({
    resources : [
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/load/logo.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/load/pgBar.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/load/pgBg.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/start/bgImg.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/start/logo.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/start/ruleBtn.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/start/startBg.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/start/startBtn.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/start/sureBtn.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/start/titleImg.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/buttonBg.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/clock.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/cow1_1.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/cow1_2.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/cow1_3.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/cow2_1.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/cow2_2.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/cow2_3.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/cow3_1.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/cow3_2.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/cow3_3.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/gameBg.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/pushBtn.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/rope.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/ropeCow1.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/ropeCow2.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/ropeCow3.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/game/scoreBg.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/over/applyBtn.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/over/choujiang.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/over/gameOverBg.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/over/overScore.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/over/rankBtn.png',
        'http://app.sencha.com.cn/lemei9/wangzheng/疯狂套牛/resource/assets/over/trymore.png'

    ],
    onStart : function(total){
        //console.log('start:'+total);
    },
    onProgress : function(current, total){
        //console.log(current+'/'+total);
        var percent = current/total*100;
        $('.progressbar').css('width', percent+'%');
        var barWidth=SCREENWIDTH*0.8*percent/100;

        $('.progresstext').text(parseInt(percent)+'%');
        $('#loading_page .progress img').css({'left':(barWidth-100)});
    },
    onComplete : function(total){
        startGame();
    }
});
loader.start();

//开始界面
window.startGame=function(){
    //隐藏加载界面
    $('#loading_page').css('display','none');

    //显示开始界面
    $('#start_page .bgImg').css('display','block');

   //点击关闭按钮
    $('#start_page  .bgImg .sureBtn').click(function(){
        //关闭弹出框和背景
        $(this).parent().fadeOut().prev().fadeOut();
    });

   //点击规则按钮
    $('#start_page .ruleBtn').click(function(){
        //弹出活动规则对话框
        $('#start_page .bgImg').css('display','block');
    });

    //点击开始按钮
    $('.startBtn').click(function(){
        //跳转到游戏界面
        game();
    });
};


 //定义函数，生成背景图片
function cowBg(bgName){
    var bgString="resource/assets/game/"+bgName+".png";
    return bgString;
}

//套住牛后要做的事情
function ropeCow(addScore,targetCowBg,targetCow){

    //分数变化
    score=score+addScore;
    var single_score=$('#single_score');
    single_score.show().text('+'+addScore).animate({'top':'-150px'},800);
    setTimeout(function(){
        $('#single_score').animate({'top':'-50px'},1).hide();
    },800);


    //改变牛的背景图片
    var oRope=$('.rope_wrap');
    targetCow.remove();
    var oRopeCow=$(' <img class="cow" >');
    var oRopeCowWidth=oRope.width();

    var  targetCowLeft=(SCREENWIDTH-oRopeCowWidth)/2;
    $('.cow_wrap').append(oRopeCow);
    oRopeCow.css({'left':targetCowLeft,'width':oRopeCowWidth,'height':400});
    oRopeCow.attr({'src':"resource/assets/game/"+targetCowBg+".png"});

    //隐藏显示绳子
    oRope.css('display','none');
    setTimeout(function(){
        oRope.css('display','block');
        oRopeCow.remove();
    },700);

    oRopeCowWidth=$('.rope').width()*1.5;
    targetCowLeft=(SCREENWIDTH-oRopeCowWidth)/2;
    //拉回被套住的牛
    oRopeCow.animate({'top':'140px','width':oRopeCowWidth,'left':targetCowLeft,'height':'400px'},300).animate({'top':'120px'},200).animate({'top':'160px'},200);

}

//游戏界面

window.game=function(){

    //隐藏开始页面，显示游戏页面
    $('#start_page').css('display','none');
    $('#game_page').css('display','block');

    //分数清零
    var oScore=$('#game_page .score span');
    oScore.text('');

    //设置时间显示
    function timeOn(){
        $('#game_page .time span').text(time);
        time=time-1;
    }
    timeOn();
    setInterval(function(){
        timeOn();
    },1000);

    //开始播放音乐
    $('audio')[0].play();

    //动态创建牛(type="1","2","3")
    window.createCows=function(iSpeed,type){

        var oCow=$(' <img class="cow" >');
        oCow.css({'width':'220px','height':'170px','left':SCREENWIDTH});
        //添加牛到屏幕
        $('.cow_wrap').append(oCow);

        //改变牛的背景图片
        var cowBgNum=0;
       setInterval(function(){
            cowBgNum++;
            if(cowBgNum<4){
                oCow.attr('src',"resource/assets/game/cow"+type+"_"+cowBgNum+".png");
            }else{
                cowBgNum=0;
            }
        },150);

        //使牛运动起来
        oCow.animate({'left':'-220px'},iSpeed);

        //销毁走出屏幕的牛
        setTimeout(function(){
            oCow.remove();
        },iSpeed);
    };

    //每隔2s随机创建一头牛随机创建cow
 window.createCowsUsually=function(){
    timer=setInterval(function(){
        function createCow(){
            var randomNum=Math.round(100*Math.random());
            window.cowProperty={};
            if(randomNum>=0&&randomNum<=40){cowProperty.randomType="1";cowProperty.iSpeed=7000}
            if(randomNum>40&&randomNum<=70){cowProperty.randomType="2";cowProperty.iSpeed=6000}
            if(randomNum>70&&randomNum<=100){cowProperty.randomType="3";cowProperty.iSpeed=5000}

            createCows(cowProperty.iSpeed,cowProperty.randomType);
        }
        createCow();
    },1700);
}
    createCowsUsually();

    //totalTime秒后进入结束界面
    setTimeout(function(){
            gameOver();
    },totalTime);

    //点击push按钮
    function touchStart(){

        var pushBtn=$('.pushBtn');
        btnWidth=pushBtn.width();
        btnHeight=pushBtn.height();

        //按钮动画
        $(this).animate({'width':btnWidth*0.7,'height':btnHeight*0.7},150).animate({'width':btnWidth,'height':btnHeight},150);


        //抛出绳子
        var oRope=$('.rope');
        if(oRope.css('bottom')=='-270px'){
            //如果绳子在原始点就将绳子抛出
            oRope.animate({bottom:'-30px'},ropeTime).animate({bottom:'-270px'},ropeTime);
        }

        //ropeTime秒后绳子到达最顶端，判断所有牛与绳子的左侧的位置关系
        setTimeout(function(){
            //所有的牛
            var cows=$('.cow');
            //console.log(cows.size());
            for(var i=0;i<cows.size();i++){
                //牛的left值
                var cowLeft=cows.eq(i).position().left;

                //绳子距屏幕的左侧距离
                var  ropeLeft=$('.rope_wrap').position().left;

                //如果cowLeft大于ropeLeft-10且cowLeft小于ropeLeft+10，则套住了牛
                if(cowLeft<(ropeLeft+10)&&cowLeft>(ropeLeft-10)){

                    var targetCow=cows.eq(i);

                    if(targetCow.attr('src')==cowBg("cow1_1")||targetCow.attr('src')==cowBg("cow1_2")||targetCow.attr('src')==cowBg("cow1_3")){

                        ropeCow(3,'ropeCow1',targetCow);

                    }else if(targetCow.attr('src')==cowBg("cow2_1")||targetCow.attr('src')==cowBg("cow2_2")||targetCow.attr('src')==cowBg("cow2_3")){

                        ropeCow(5,'ropeCow2',targetCow);

                    }else{
                        ropeCow(7,'ropeCow3',targetCow);
                    }

                    //分数变化
                    $('#game_page .score span').text(score);

                }
            }



        },ropeTime);

    }

    //if(document.hasOwnProperty("ontouchstart")) {
        //alert("浏览器支持触屏");
         FastClick.attach(document.body);
        $('.pushBtn img').click(touchStart);

    //}
    //else {
        //alert("浏览器不支持触屏");
        //$('.pushBtn img')[0].onclick=touchStart;
    //}


};

//游戏结束
window.gameOver=function(){
    $('audio')[0].pause();
    $('#game_page').css({'display':'none'});
    $('#over_page').css({'display':'block'});
    $('.myScore span').text(score);

    //点击再来一次
    $('.tryAgain').click(function(){
        $('audio')[0].play();
        //隐藏开始页面，显示游戏页面
        $('#start_page').css('display','none');
        $('#game_page').css('display','block');

        //设置时间显示
        time=30;

        //分数清零
        score=0;
        $('#game_page .score span').text('');

        //20秒后进入结束界面
        setTimeout(function(){
            gameOver();
        },totalTime);

    })
};